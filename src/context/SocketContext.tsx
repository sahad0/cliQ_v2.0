import React, { ReactNode, createContext, useEffect, useState } from 'react';
import {  Socket, io } from 'socket.io-client';
import { useAppDispatch, useAppSelector } from '../Hooks/hooks';
import { messageController } from '../store/messageStore';
import { Alert } from 'react-native';




export const SocketContext = createContext<{socket?:Socket}>({});

export const SocketProvider = ({ children }:{children:ReactNode}) => {

  const {token} = useAppSelector((state)=>state.cart.auth.value);
  const {profile} = useAppSelector((state)=>state.cart.auth.value);
  const dispatch = useAppDispatch();
  const {chatId,textMsg} = useAppSelector((state)=>state.cart.message.value);
  const [socket,setSocket] = useState<Socket>();


  useEffect(() => {
    const socket:Socket = io('https://prezz.live/', {
    path: "/api/socket.io",
    secure: true,
    query: { "token": token },
    'transports': ['websocket', 'polling'],
  });
 
  socket.on("connect", () => {
    setSocket(socket);
    // console.log(socket.id);

  });
  socket.on("fetch-messages", (data) => {
    console.log("fetching messages...", data);
  })

    socket.on("send-message", (data) => {
      console.log("send message.........", data, profile?.user_id);
      if (data.sender.user_id === profile?.user_id || data.chat_id.split(':')[1] === profile?.user_id) {
          console.log("receiving message/.....", data);
          // dispatch(messageController({textMsg}));
      }
    })
  
 
    return () => {
        socket.close();
    }
}, [])
  

  

  return (
    <SocketContext.Provider value={{ socket : socket }}>
      {children}
    </SocketContext.Provider>
  );
};
