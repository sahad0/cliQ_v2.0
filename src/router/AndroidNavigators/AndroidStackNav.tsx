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
import { SocketProvider } from '../../context/SocketContext';


// type SocketType = {
//   getSocket?:()=>object | undefined
// }

export  type AndroidStackParams = {
  TabNavigators:undefined,
  ChannelMenu:undefined,
  ChannelForm:undefined,
  AddParticipants:{organization_id:string},
  Pins:{
    data : {id:string,imgUrl:ImageSourcePropType,name:string}[]
  },
  Chat:Partial<{data:{id:string,name:string,}}> ,


  
}


const Stack = createNativeStackNavigator<AndroidStackParams>(); 


const AndroidStackNav = () => {

  const [socket,setSocket] = useState<object>();

  const {token} = useAppSelector((state)=>state.cart.auth.value);
  const {profile} = useAppSelector((state)=>state.cart.auth.value);
  const {chatId,textMsg} = useAppSelector((state)=>state.cart.message.value);

  const getSocket = ()=>socket;  
  const dispatch = useAppDispatch();



  


  return (
    <SocketProvider>
      <Stack.Navigator  screenOptions={{headerShown:false,}}  initialRouteName={'TabNavigators'} >

          <Stack.Screen  options={{animation:'fade_from_bottom'}} name='TabNavigators' component={TabNavigatorsAndroid} />
          <Stack.Screen  options={{animation:'slide_from_right'}} name='ChannelMenu' component={ChannelMenuAndroid} />
          <Stack.Screen  options={{animation:'slide_from_right'}} name='ChannelForm' component={ChannelFormAndroid} />
          <Stack.Screen  options={{animation:'slide_from_right'}} name='AddParticipants' component={AddParticipants} />
          <Stack.Screen  options={{animation:'slide_from_right'}} name='Pins' component={PinsIOS} />
          <Stack.Screen  options={{animation:'slide_from_right'}} name='Chat' component={ChatViewIOS} />




      </Stack.Navigator>
    </SocketProvider>
  )
}

export default AndroidStackNav;