import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import ChatListIOSHeader from '../../../components/IOS/ChatListIOS/ChatListIOSHeader';
import ChatListIOSPins from '../../../components/IOS/ChatListIOS/ChatListIOSPins';
import ChatIOS from '../../../components/IOS/ChatListIOS/ChatIOS';

const ChatListIOS = () => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);
  const{height,width} = Dimensions.get('screen');

  return (
    <SafeAreaView style={{backgroundColor:colors.zBlack,flex:1}}>

      <ChatListIOSHeader height={height} width={width} />
      <ChatListIOSPins height={height} width={width} />
      <ChatIOS height={height} width={width} />


      

    </SafeAreaView>
  )
}

export default ChatListIOS;