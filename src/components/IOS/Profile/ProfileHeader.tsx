import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import Ion from 'react-native-vector-icons/Ionicons'



type AppProps = {
    height:number,
    width:number,
}


const ProfileHeader:FC<AppProps> = ({height,width}) => {
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const {profile} = useAppSelector((state)=>state.cart.auth.value);

console.log(profile?.status);
  return (
    <View style={{height:height*0.25,backgroundColor:'#212121'}}>
        <View>
            <View >
                <Ion name='ios-close' size={height*0.03} style={{margin:height*0.02,}} color={colors.secondary} />
            </View>
            <View style={{marginLeft:height*0.02,flexDirection:'row',alignItems:'center'}}>
                <Image source={require('../../../assets/images/item.jpg')} style={{height:height*0.08,width:height*0.08,borderRadius:height}} />
                <View style={{marginLeft:height*0.03}}>
                <Text style={{color:colors.secondary,fontSize:height*0.023,fontWeight:'600'}}>{profile?.first_name}</Text>
                <Text style={{color:colors.zGray,fontSize:height*0.017,fontWeight:'600'}}>{profile?.email}</Text>
                </View>
            </View>
            <View style={{backgroundColor:colors.zBlack,height:height*0.05,margin:height*0.03,borderRadius:height*0.01,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
               <View></View>
                <View style={{height:height*0.015,width:height*0.015,backgroundColor:'green',borderRadius:height}} />
                <Text style={{color:colors.secondary}}>{profile?.status}</Text>
            </View>
        </View>
    </View>
  )
}

export default ProfileHeader