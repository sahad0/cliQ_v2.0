import { View, Text, SafeAreaView, Dimensions, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect } from 'react'
import ChatViewIOSHeader from '../../../components/IOS/ChatViewIOS/ChatViewIOSHeader'
import { RouteProp, useRoute } from '@react-navigation/native';
import { AppStackIOSParams } from '../../../router/IOSNavigators/AppStackIOS';
import { useAppSelector } from '../../../Hooks/hooks';
import ChatViewIOSBody from '../../../components/IOS/ChatViewIOS/ChatViewIOSBody';
import { height, width } from '../../../utils/Dimension';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AndroidStackParams } from '../../../router/AndroidNavigators/AndroidStackNav';




const ChatViewIOS = ():JSX.Element => {

    const {params:{data:{id,name}}} = useRoute<RouteProp<AppStackIOSParams,'ChatViewIOS'>>();
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const {profile} = useAppSelector((state)=>state.cart.auth.value);

    const {params:{getSocket}} = useRoute<RouteProp<AndroidStackParams,'Chat'>>();


   console.log("socket",getSocket ? getSocket():null);

  return (
    <SafeAreaView style={{backgroundColor:colors.primary,flex:1,paddingTop: Platform.OS === 'android' ? '4%' : 0}}>
          <ChatViewIOSHeader height={height} width={width} name={name} />
          <ChatViewIOSBody height={height} width={width} />
    </SafeAreaView>
  )
}

export default ChatViewIOS