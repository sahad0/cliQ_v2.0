import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { useAppSelector } from '../../../Hooks/hooks';

type AppProps = {
    height:number,
    width:number,
}

const ChatIOS:FC<AppProps> = ({height,width}):JSX.Element => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);

  return (
    <View style={{width:width,flexDirection:'row',margin:height*0.003,alignItems:'center',justifyContent:'center'}}>
        <View style={{width:'15%',}}>
            <Image source={require('../../../assets/images/profPics/7.png')} style={{height:height*0.06,width:height*0.06,borderRadius:height}} />
       </View>
        <View style={{marginLeft:height*0.01,width:'75%',}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{color:colors.secondary,fontSize:height*0.021,fontWeight:'600'}}>Max</Text>
                <Text  style={{color:colors.zGray,fontSize:height*0.014}}>11.00am</Text>
            </View>
            <Text style={{color:colors.zGray,marginTop:height*0.005,fontSize:height*0.018,width:'83%',}} numberOfLines={1} ellipsizeMode={'tail'} >How are you doing?</Text>       
        </View>
    </View>
  )
}

export default ChatIOS;