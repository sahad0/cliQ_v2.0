import { View, Text } from 'react-native'
import React, { FC } from 'react'
import Antd from 'react-native-vector-icons/AntDesign';
import { useAppSelector } from '../../../Hooks/hooks';
type AppProps = {
    height:number,
    width:number,
}


const ChatListIOSPins:FC<AppProps> = ({height,width}):JSX.Element => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);

  return (
    <View style={{height:height*0.17,backgroundColor:colors.zBlack}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',margin:height*0.03,marginTop:0,alignItems:'center'}}>
            <Text style={{color:colors.secondary,fontSize:height*0.02,fontWeight:'600'}}>My Pins</Text>
            <Antd name='right' size={height*0.015} color={colors.zGray} />
      </View>
    </View>
  )
}

export default ChatListIOSPins