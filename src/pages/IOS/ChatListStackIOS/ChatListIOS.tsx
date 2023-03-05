import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import ChatIOS from '../../../components/IOS/ChatListIOS/ChatIOS';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

const ChatListIOS = () => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);
  const{height,width} = Dimensions.get('screen');

  return (
    <SafeAreaView style={{backgroundColor:colors.zBlack,flex:1}}>

      
      <ChatIOS height={height} width={width} />
      <View  style={{backgroundColor:colors.zBlue,height:height*0.06,width:height*0.06,borderRadius:height,position:'absolute',alignItems:'center',justifyContent:'center',top:'96%',left:'80%'}}>
      <Material name='square-edit-outline' size={height*0.028}  color={'white'} />

      </View>


      

    </SafeAreaView>
  )
}

export default ChatListIOS;