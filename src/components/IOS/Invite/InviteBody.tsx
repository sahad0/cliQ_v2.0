import { View, Text, Pressable, TextInput, ActivityIndicator } from 'react-native'
import React, { FC } from 'react'
import Ion from 'react-native-vector-icons/Ionicons'
import { useAppSelector } from '../../../Hooks/hooks'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppStackIOSParams } from '../../../router/IOSNavigators/AppStackIOS'


type AppProps = {
    height:number,
    width:number,
}

const InviteBody:FC<AppProps> = ({height,width}) => {
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const navigation = useNavigation<StackNavigationProp<AppStackIOSParams,'Invite'>>(); 
  return (
    <>
    <View style={{backgroundColor:'#040404',height:height*0.06,margin:height*0.02,borderRadius:height*0.01,}}>
        <TextInput placeholder='Email' placeholderTextColor={colors.placeholderColor} style={{height:height*0.06,fontSize:height*0.018,paddingLeft:height*0.03}} />
    </View>
    <Pressable style={{backgroundColor:'#021225',alignSelf:'flex-end',margin:height*0.03,borderRadius:height*0.01,flexDirection:'row'}}>
            {/* <ActivityIndicator color={'#0f69d7'} style={{margin:height*0.01,marginRight:0}} /> */}
            <Text style={{color:'#0f69d7',fontSize:height*0.02,margin:height*0.02,fontWeight:'600'}}>INVITE</Text>
        </Pressable>
    </>
  )
}

export default InviteBody;