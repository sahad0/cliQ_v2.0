import { View, Text, TouchableOpacity, Keyboard, SafeAreaView } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import LoginHeader from '../../../components/CommonComp/Login/LoginHeader';
import ResetPasswordForm from '../../../components/CommonComp/ResetPassword/ResetPasswordForm';
import { useAppSelector } from '../../../Hooks/hooks';






export default function ResetPassword():JSX.Element {
    const {width, height} = Dimensions.get('screen');
    const {colors} = useAppSelector((state)=>state.cart.color.value);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.primary}}>
        <TouchableOpacity style={{flex:1}} activeOpacity={1} onPress={()=>Keyboard.dismiss()}>
        <LoginHeader height={height} width={width} text1='Enter New Password' text2='Enter your new password, please include capital letters and symbols to improve safety!' />
        <KeyboardAvoidingView>
        <ResetPasswordForm height={height} width={width}    />
        </KeyboardAvoidingView>
        </TouchableOpacity>
    </SafeAreaView>
  )
}