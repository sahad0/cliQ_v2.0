import {  TouchableOpacity, Keyboard, Dimensions, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native';
import { useAppSelector } from '../../../Hooks/hooks';
import LoginHeader from '../../../components/CommonComp/Login/LoginHeader';
import LoginForm from '../../../components/CommonComp/Login/LoginForm';
import { height, width } from '../../../utils/Dimension';


interface User  {
  email:string,
}

 const Login = ():JSX.Element=> {

    
    const {colors} = useAppSelector((state)=>state.cart.color.value);

    const text1 = 'Sign in';
    const text2 = 'to access Cliq'


    const [user,setUser] = useState<User>({email:''});



  return (
    <>
    <SafeAreaView style={{flex:1,backgroundColor:colors.primary,}} >
      <StatusBar  backgroundColor={colors.primary}   />
    <TouchableOpacity onPress={()=>Keyboard.dismiss()} activeOpacity={1}>
        <LoginHeader height={height} width={width} text1={text1} text2={text2}/>
        <KeyboardAvoidingView>
        <LoginForm height={height} width={width}  setUser={setUser} user={user} />
        </KeyboardAvoidingView>
    </TouchableOpacity>
    </SafeAreaView>
    </>
  )
}

export default Login;