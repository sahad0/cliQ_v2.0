import { View, Text, Pressable } from 'react-native'
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

const InviteHeader:FC<AppProps> = ({height,width}) => {
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const navigation = useNavigation<StackNavigationProp<AppStackIOSParams,'Invite'>>();
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:height*0.03}}>
        <View />
        <Text style={{color:colors.secondary,fontSize:height*0.022,fontWeight:'600'}}>Invite Contact</Text>
        <Pressable onPress={()=>navigation.goBack()}>
            <Ion name='ios-close' size={height*0.03} color={colors.secondary} />
        </Pressable>

    </View>
  )
}

export default InviteHeader