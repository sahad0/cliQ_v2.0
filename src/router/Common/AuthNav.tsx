import React from 'react'
import { useAppSelector } from '../../Hooks/hooks';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../pages/CommonPages/auth/Login';
import Signup from '../../pages/CommonPages/auth/Signup';
import OtpVerifySignUp from '../../pages/CommonPages/auth/OtpVerifySignUp';
import ForgotPassword from '../../pages/CommonPages/auth/ForgotPassword';
import OtpVerifyForgotPass from '../../pages/CommonPages/auth/OtpVerifyForgotPass';
import ResetPassword from '../../pages/CommonPages/auth/ResetPassword';



export type AuthStackParams = {
  Login:undefined,
  SignUp:undefined,
  OtpVerifySignUp:{
    user:{
      email:string,
      password:string,
      phone:string,
    }
  },
  ForgotPassword:undefined,
  OtpVerifyForgotPass:{
    email:string
  },
  ResetPassword:{
    user:{
      email:string,
      otp:string,
    }
  },

  

  

}

const AuthNav = ():JSX.Element => {

  const Stack = createNativeStackNavigator<AuthStackParams>(); 


  const {token,orgNewUser} = useAppSelector((state)=>state.cart.auth.value);

  const auth = token;
  const newUser = orgNewUser;

  return (

    <Stack.Navigator  screenOptions={{headerShown:false,}}  initialRouteName={'Login'} >
        <>
          <Stack.Screen  options={{animation:'fade_from_bottom'}} name='Login' component={Login} />

          <Stack.Screen  options={{animation:'fade_from_bottom'}} name='SignUp' component={Signup} />

          <Stack.Screen  options={{animation:'slide_from_right'}} name='OtpVerifySignUp' component={OtpVerifySignUp} />

          <Stack.Screen  options={{animation:'slide_from_right'}} name='ForgotPassword' component={ForgotPassword} />
      
          <Stack.Screen  options={{animation:'slide_from_right'}} name='OtpVerifyForgotPass' component={OtpVerifyForgotPass}  />

          <Stack.Screen  options={{animation:'slide_from_right'}} name='ResetPassword' component={ResetPassword} /> 
        </>
    </Stack.Navigator>
  )
}

export default AuthNav;