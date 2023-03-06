import { View, Text, TextInput } from 'react-native'
import React, { FC } from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import Ion from 'react-native-vector-icons/Ionicons'

type AppProps = {
    height:number,
    width:number,
}

const StartChatIOSBody:FC<AppProps> = ({height,width}) => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);

  return (
    <>
    <View style={{flexDirection:'row',height:height*0.05,backgroundColor:colors.zGray,width:width*0.9,alignSelf:'center',alignItems:'center'}}>
        <View style={{backgroundColor:'red',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
        <Ion name='ios-search' size={height*0.03} color={colors.secondary} style={{height:height*0.05,}} />

        </View>
        {/* <TextInput  style={{height:height*0.05,}} /> */}

    </View>
    </>
  )
}

export default StartChatIOSBody