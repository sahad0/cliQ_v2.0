import { View, Text, ImageSourcePropType } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigatorsAndroid from './TabNavigatorsAndroid';
import ChannelMenuAndroid from '../../pages/Android/ChannelListStackAndroid/ChannelMenuAndroid';
import ChannelFormAndroid from '../../pages/Android/ChannelListStackAndroid/ChannelFormAndroid';
import AddParticipants from '../../pages/Android/ChannelListStackAndroid/AddParticipantsAndroid';
import PinsIOS from '../../pages/IOS/ChatListStackIOS/PinsIOS';

import ChatViewIOS from '../../pages/IOS/ChatListStackIOS/ChatViewIOS';
import { Socket, io } from 'socket.io-client';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { messageController } from '../../store/messageStore';

type SocketType = {
  getSocket?:()=>object | undefined
}

export  type AndroidStackParams = {
  TabNavigators:undefined,
  ChannelMenu:undefined,
  ChannelForm:undefined,
  AddParticipants:{organization_id:string},
  Pins:{
    data : {id:string,imgUrl:ImageSourcePropType,name:string}[]
  },
  Chat:Partial<{data:{id:string,name:string,}}> & SocketType,


  
}


const Stack = createNativeStackNavigator<AndroidStackParams>(); 


const AndroidStackNav = () => {

  const [socket,setSocket] = useState<object>();

  const {token} = useAppSelector((state)=>state.cart.auth.value);
  const {profile} = useAppSelector((state)=>state.cart.auth.value);
  const {chatId,textMsg} = useAppSelector((state)=>state.cart.message.value);

  const getSocket = ()=>socket;  
  const dispatch = useAppDispatch();

  useEffect(() => {
    initSocket();
  }, [])


  const initSocket = () => {
    console.log("socket testing");
    const socket = io('https://prezz.live/', {
      path: "/api/socket.io",
      secure: true,
      query: { "token": token },
      'transports': ['websocket', 'polling'],
    });
    socket.on("connect", () => {
      setSocket(socket);
      console.log(socket.id)

    });

    socket.on("send-message", (data) => {
      console.log("send message.........", data, profile?.user_id);
      if (data.sender.user_id === profile?.user_id || data.chat_id === profile?.user_id+":"+chatId || data.sender.user_id ===  profile?.user_id+":"+chatId) {
          console.log("receiving message/.....", data)
          dispatch(messageController({textMsg}));
      }
      // console.log(data.sender.user_id, "!==", localStorage.getItem("!@#$%^&*(user_id)*&^%$#@!"), " &&", data.chat_id, "!== ", localStorage.getItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*("))
      // if (data.sender.user_id !== localStorage.getItem("!@#$%^&*(user_id)*&^%$#@!") && data.chat_id !== localStorage.getItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*(")) {
      //     console.log("send unread count", unreadCount);
      //     const notifyToken = localStorage.getItem("$%^&*(*&^%$#@#$%^&*()n(*(*otify(*&&*(t(*&*(oken)(*&^&*(")
      //     // if (notifyToken)
      //     //     sendNotification(socket, data._id, notifyToken);
      //     // setUnreadCount(unreadCount => {
      //     //     unreadCount[data.chat_id] = unreadCount[data.chat_id] ? unreadCount[data.chat_id] + 1 : 1;
      //     //     return { ...unreadCount }
      //     // })
      })
    
   

    return () => {
        socket.close();
    }

    // socket.on("fetch-messages", (data) => {
    //   console.log("fetching messages...", data);
    //   setNewMsg(!data.isReload);
    //   data.isReload ? setMessages((messages) => [...data.messages, ...messages]) : setMessages(data.messages);
    //   setReload(true);
    //   setFinishState(data.isFinished);

    // })
  }




  return (
   <Stack.Navigator  screenOptions={{headerShown:false,}}  initialRouteName={'TabNavigators'} >

        <Stack.Screen  options={{animation:'fade_from_bottom'}} name='TabNavigators' component={TabNavigatorsAndroid} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name='ChannelMenu' component={ChannelMenuAndroid} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name='ChannelForm' component={ChannelFormAndroid} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name='AddParticipants' component={AddParticipants} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name='Pins' component={PinsIOS} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name='Chat' component={ChatViewIOS} initialParams={{getSocket}} />




    </Stack.Navigator>
  )
}

export default AndroidStackNav;