import { View, Text, SafeAreaView, Dimensions, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import ChatViewIOSHeader from '../../../components/IOS/ChatViewIOS/ChatViewIOSHeader'
import { RouteProp, useRoute } from '@react-navigation/native';
import { AppStackIOSParams } from '../../../router/IOSNavigators/AppStackIOS';
import { useAppSelector } from '../../../Hooks/hooks';
import ChatViewIOSBody from '../../../components/IOS/ChatViewIOS/ChatViewIOSBody';
import { height, width } from '../../../utils/Dimension';

const ChatViewIOS = ():JSX.Element => {

    const {params:{data:{id,name}}} = useRoute<RouteProp<AppStackIOSParams,'ChatViewIOS'>>();
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const {profile} = useAppSelector((state)=>state.cart.auth.value);

  return (
    <SafeAreaView style={{backgroundColor:colors.primary,flex:1}}>
          <ChatViewIOSHeader height={height} width={width} name={name} />
          <ChatViewIOSBody height={height} width={width} />
    </SafeAreaView>
  )
}

export default ChatViewIOS