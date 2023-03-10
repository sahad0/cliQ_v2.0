import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { useAppSelector } from '../../../../Hooks/hooks';
import Ion from 'react-native-vector-icons/Ionicons'
import Antd from 'react-native-vector-icons/AntDesign';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProfileStackParams } from '../../../../router/IOSNavigators/ProfileStackIOS';



type AppProps = {
    height:number,
    width:number,
}


const ProfileHeader:FC<AppProps> = ({height,width}) => {
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const {profile} = useAppSelector((state)=>state.cart.auth.value);

    const navigation = useNavigation<StackNavigationProp<ProfileStackParams,'Profile'>>();

  return (
    <View style={{height:height*0.25,backgroundColor:'#212121'}}>
        <View>
            <View >
                <Ion name='ios-close' size={height*0.03} style={{margin:height*0.02,}} color={colors.secondary} />
            </View>
            <View style={{marginLeft:height*0.02,flexDirection:'row',alignItems:'center'}}>
                <Image source={require('../../../../assets/images/item.jpg')} style={{height:height*0.08,width:height*0.08,borderRadius:height}} />
                <View style={{marginLeft:height*0.03}}>
                <Text style={{color:colors.secondary,fontSize:height*0.023,fontWeight:'600'}}>{profile?.first_name}</Text>
                <Text style={{color:colors.zGray,fontSize:height*0.017,fontWeight:'600'}}>{profile?.email}</Text>
                </View>
            </View>
            <Pressable onPress={()=>navigation.navigate('Status')} style={{backgroundColor:colors.zBlack,height:height*0.05,margin:height*0.03,borderRadius:height*0.01,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
               <View style={{flexDirection:'row',alignItems:'center',margin:width*0.07,marginTop:0,marginBottom:0}}>
                        <View style={{height:height*0.015,width:height*0.015,backgroundColor:'green',borderRadius:height}} />
                        <Text style={{color:colors.secondary,fontSize:height*0.02,marginLeft:height*0.01}}>{profile?.status[0].concat(profile.status.slice(1,profile.status.length).toLowerCase())}</Text>

                </View>
                    <Antd name='right' size={height*0.025} color={colors.secondary}  style={{marginRight:height*0.01}} />

            </Pressable>
        </View>
    </View>
  )
}

export default ProfileHeader