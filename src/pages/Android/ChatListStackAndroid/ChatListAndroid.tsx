import { View, Text } from 'react-native'
import React from 'react'
import ChatListIOS from '../../IOS/ChatListStackIOS/ChatListIOS'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAppSelector } from '../../../Hooks/hooks'

const ChatListAndroid = () => {

    const {colors} = useAppSelector((state)=>state.cart.color.value);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.primary}}>
        <ChatListIOS />
    </SafeAreaView>
  )
}

export default ChatListAndroid