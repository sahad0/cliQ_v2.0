import {  Dimensions,  TouchableOpacity, Keyboard, SafeAreaView } from 'react-native'
import React from 'react'
import SignupHeader from '../../../components/CommonComp/Signup/SignupHeader';
import OtpVerifyFormSignUp from '../../../components/CommonComp/OtpVerifySignUp/OtpVerifyFormSignUp';
import { useAppSelector } from '../../../Hooks/hooks';
import { height, width } from '../../../utils/Dimension';



export default function OtpVerifySignUp():JSX.Element {

    const {colors} = useAppSelector((state)=>state.cart.color.value);





  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.primary}}>
        <SignupHeader height={height} width={width}  />
        <TouchableOpacity activeOpacity={1} onPress={()=>Keyboard.dismiss()}>
        <OtpVerifyFormSignUp height={height} width={width}  />
        </TouchableOpacity>
    </SafeAreaView>
  )
}