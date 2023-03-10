import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import ChatListIOSHeader from '../../../components/IOS/ChatListIOS/ChatListIOSHeader';
import { height, width } from '../../../utils/Dimension';
import PersonalChannelList from '../../../components/IOS/ChannelListIOS/PersonalChannelList';


const ChannelListIOS = ():JSX.Element => {

    const {colors} = useAppSelector((state)=>state.cart.color.value);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.zBlack}}>
      <ChatListIOSHeader height={height} width={width} />
      <PersonalChannelList height={height} width={width} />
      <View  style={{backgroundColor:colors.zBlue,height:height*0.06,width:height*0.06,borderRadius:height,position:'absolute',alignItems:'center',justifyContent:'center',top:'96%',left:'80%'}}>
      <TouchableOpacity >
        <Text style={{color:colors.secondary,fontSize:height*0.024}}>#</Text>
      </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default ChannelListIOS;