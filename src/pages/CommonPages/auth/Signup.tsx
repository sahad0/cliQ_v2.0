import { View,Dimensions, TouchableOpacity, Keyboard, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import React from 'react'
import SignupHeader from '../../../components/CommonComp/Signup/SignupHeader';
import SignUpForm from '../../../components/CommonComp/Signup/SignUpForm';
import SignupFooter from '../../../components/CommonComp/Signup/SignupFooter';
import { useAppSelector } from '../../../Hooks/hooks';




const Signup = ():JSX.Element => {

    const {width,height} = Dimensions.get('screen');
    const {colors} = useAppSelector((state)=>state.cart.color.value);


  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.primary}}>
        <TouchableOpacity onPress={()=>Keyboard.dismiss()} activeOpacity={1}>
            <SignupHeader height={height} width={width}  />
            <KeyboardAvoidingView >
            <SignUpForm height={height} width={width} />
            </KeyboardAvoidingView>
            <SignupFooter height={height} />
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Signup