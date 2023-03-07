import { View, Text, Dimensions, TouchableOpacity, Keyboard, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import React from 'react'
import LoginHeader from '../../../components/CommonComp/Login/LoginHeader';
import OtpVerifyFormForgotPass from '../../../components/CommonComp/OtpVerifyForgotPass/OtpVerifyFormForgotPass';
import { useAppSelector } from '../../../Hooks/hooks';
import { height, width } from '../../../utils/Dimension';



export default function OtpVerifyForgotPass():JSX.Element {

    const {colors} = useAppSelector((state)=>state.cart.color.value);

    const text1 = 'Verify via email';
    const text2 = 'Enter  one-time password sent to your email.'



  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.primary}}>
      <TouchableOpacity style={{flex:1}} activeOpacity={1} onPress={()=>Keyboard.dismiss()}>
        <LoginHeader height={height} width={width} text1={text1} text2={text2} />
        <KeyboardAvoidingView>
        <OtpVerifyFormForgotPass height={height} width={width}  />
        </KeyboardAvoidingView>
        </TouchableOpacity>
    </SafeAreaView> 
  )
}