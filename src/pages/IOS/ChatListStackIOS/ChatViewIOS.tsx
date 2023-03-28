import { View, Text, SafeAreaView, Dimensions, KeyboardAvoidingView, Platform, DeviceEventEmitter, Button, PixelRatio } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ChatViewIOSHeader from '../../../components/IOS/ChatViewIOS/ChatViewIOSHeader'
import { RouteProp, useRoute } from '@react-navigation/native';
import { AppStackIOSParams } from '../../../router/IOSNavigators/AppStackIOS';
import { useAppSelector } from '../../../Hooks/hooks';
import ChatViewIOSBody, { RenderType } from '../../../components/IOS/ChatViewIOS/ChatViewIOSBody';
import { height, width } from '../../../utils/Dimension';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AndroidStackParams } from '../../../router/AndroidNavigators/AndroidStackNav';
import { SocketContext } from '../../../context/SocketContext';
import TextFile from '../../../components/IOS/ChatViewIOS/TextFile';

export type PropRef =  {setReplyFn:(item:RenderType)=>void,}|null;


const ChatViewIOS = ():JSX.Element => {

    const {params:{data:{id,name}}} = useRoute<RouteProp<AppStackIOSParams,'ChatViewIOS'>>();
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const replyRef = useRef<PropRef | null>(null);
  





  return (
    <SafeAreaView style={{backgroundColor:colors.primary,flex:1,paddingTop: Platform.OS === 'android' ? '4%' : 0}}>
          <ChatViewIOSHeader height={height} width={width} name={name} />
          <ChatViewIOSBody replyRef={replyRef} height={height} width={width} />
         <TextFile ref={replyRef}  />
    </SafeAreaView>
  )
}

export default ChatViewIOS