import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import { Fonts } from '../../../utils/Fonts';

type Props = {
    height:number,
    width:number,
    text1:string,
    text2:string,
}


 const LoginHeader:FC<Props> = ({height,width,text1,text2})=> {
  const {colors} = useAppSelector((state)=>state.cart.color.value);

  return (
    <View>
        <Image source={require('../../../assets/images/zoho.png')}  style={{height:height*0.15,width:height*0.15,marginLeft:width*0.03}} resizeMode={'contain'}  />
        <Text style={{fontFamily:Fonts.regular,color:colors.secondary,fontSize:height*0.03,marginLeft:width*0.05,}}>{text1}</Text>
        <Text style={{textAlign:'auto',fontFamily:Fonts.regular,color:'gray',fontSize:height*0.019,marginLeft:width*0.05,marginTop:height*0.01}}>{text2}</Text>

    </View>
  )
}


export default LoginHeader;