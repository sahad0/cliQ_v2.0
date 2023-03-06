import { View, Text } from 'react-native'
import React, { FC } from 'react'
import Ion from 'react-native-vector-icons/Ionicons'
import { useAppSelector } from '../../../Hooks/hooks'

type AppProps = {
    height:number,
    width:number,
}

const StartChatIOSHeader:FC<AppProps> = ({height,width}) => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);

  return (
    
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:height*0.03}}>
        <Ion name='ios-close' size={height*0.03} color={colors.secondary} />
        <Text style={{color:colors.secondary,fontSize:height*0.022,fontWeight:'600'}}>Start Chat</Text>
        <View />

    </View>
  )
}

export default StartChatIOSHeader