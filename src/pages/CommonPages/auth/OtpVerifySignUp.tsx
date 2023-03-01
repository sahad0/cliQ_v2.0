import {  Dimensions,  TouchableOpacity, Keyboard, SafeAreaView } from 'react-native'
import React from 'react'
import SignupHeader from '../../../components/CommonComp/Signup/SignupHeader';
import OtpVerifyFormSignUp from '../../../components/CommonComp/OtpVerifySignUp/OtpVerifyFormSignUp';
import { useAppSelector } from '../../../Hooks/hooks';



export default function OtpVerifySignUp():JSX.Element {

    const {width,height} = Dimensions.get('screen');
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