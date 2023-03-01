import { View, Text, Dimensions, TouchableOpacity, Keyboard, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import React from 'react'
import LoginHeader from '../../../components/CommonComp/Login/LoginHeader';
import ForgetPasswordForm from '../../../components/CommonComp/ForgetPassword/ForgetPasswordForm';
import { useAppSelector } from '../../../Hooks/hooks';

export default function ForgotPassword():JSX.Element {

    const {width,height} = Dimensions.get('screen');
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const text1 = 'Forgot Password';
    const text2 = 'Enter your registered email address, mobile number, or username to change your Zoho account password.'

  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.primary}}>
        <TouchableOpacity onPress={()=>Keyboard.dismiss()} activeOpacity={1}>
            <LoginHeader height={height} width={width} text1={text1} text2={text2} />
            <KeyboardAvoidingView>
            <ForgetPasswordForm height={height} width={width} />
            </KeyboardAvoidingView>
        </TouchableOpacity>
    </SafeAreaView>
  )
}