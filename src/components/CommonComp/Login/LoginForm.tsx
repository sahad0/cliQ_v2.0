import { View, Text, TextInput, Touchable, TouchableOpacity, Image, Button, ActivityIndicator, Keyboard } from 'react-native'
import React, { FC, useEffect, useReducer, useState } from 'react'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import axios from 'axios';
import { Formik,  FormikValues , FormikProps} from 'formik'
import { useNavigation } from '@react-navigation/native';
import {  NativeStackNavigationProp } from '@react-navigation/native-stack'
import requestStatus, { initial_state } from '../../../utils/LoaderHandling';
import { AuthStackParams } from '../../../router/Common/AuthNav';
import AuthAnimated from '../../../Extra/AuthAnimated';
import { emailSchema } from '../../../Extra/YupSchema/Schema';
import { Fonts } from '../../../utils/Fonts';
import { useAppSelector } from '../../../Hooks/hooks';



type UserType = {
  email:string,
}
type Props = {
  height:number,
  width:number,
  setUser:any,
  user:UserType,
}
type Visible = true|false;

type focusBool = true|false;

type checkMail = boolean;



 const LoginForm:FC<Props> = ({height,width,setUser,user}):JSX.Element=> {

  const initialValues: FormikValues = { email: '' };
  const [visible,setVisible] = useState<Visible>(false);
  const [focus,setFocus] = useState<focusBool>(false);
  const [emailExist,setEmailExist] = useState<focusBool>(true);
  const {colors} = useAppSelector((state)=>state.cart.color.value);
  const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams,'Login'>>()


  const checkEmailExist = async(values: FormikValues): Promise<void>=>{
    try {
      Keyboard.dismiss();
      setEventReducer({type:'loading'});
      const check = await axios.post('/auth/check-email',values);
      if(check){
        const {exists} = check.data;
        if(exists){
          const {email} = values;
          setEventReducer({type:'success'});
          setUser({...user,email});
          setEmailExist(true);
          setVisible(true);

        }
        else{
          setEmailExist(false);
          setEventReducer({type:'error'});

          
        }
      }
      
    } catch (error) {
      setEventReducer({type:'error'});
    }
  }




  return (
    <View style={{marginTop:height*0.07}}>
      {
        visible ? 
        <>
          <View style={{flexDirection:'row',margin:height*0.03}}>
            <Text style={{fontFamily:Fonts.regular,color:'gray',fontSize:height*0.018,}}>{user.email}</Text>
            <TouchableOpacity style={{marginLeft:height*0.02}} onPress={()=>setVisible(false)}>
              <Text style={{fontFamily:Fonts.regular,color:'#159AFF',fontSize:height*0.017}}>Change</Text>
            </TouchableOpacity>
          </View>
          <AuthAnimated setUser={setUser} user={user}  height={height} width={width} inputStr='Password' btnStr='Log In' nvgStr='' />
          
        </>
        :
        <>
          <Animated.View >

            <Formik validateOnBlur={false} validateOnChange={false} validationSchema={emailSchema} initialValues={initialValues} onSubmit={checkEmailExist}>
            
            {({ handleChange, handleBlur, handleSubmit,values ,errors }:FormikProps<FormikValues>) => (
              
                <>
                  <TextInput placeholderTextColor={'gray'}  onChangeText={handleChange('email')} value={values.email} onFocus={()=>setFocus(true)}  onBlur={()=>{handleBlur('email'),setFocus(false)}} placeholder={"Email *"} style={{paddingLeft:height*0.01,paddingBottom:height*0.02,color:colors.secondary,fontFamily:Fonts.regular,width:width*0.9,alignSelf:'center',borderBottomColor:focus ? colors.primaryText: 'lightgray',borderBottomWidth:1,fontSize:height*0.018}} />
                  {(errors.email) &&  <><Text style={{fontSize:height*0.015,color:'red',fontFamily:Fonts.regular,margin:height*0.06,marginLeft:height*0.03,marginBottom:height*0.01}}>
                    {errors.email.toString()}
                  </Text></>}
                    
                    {emailExist?
                    <></>
                    :
                    <>
                      <Text style={{fontSize:height*0.015,color:'red',fontFamily:Fonts.regular,margin:height*0.02,marginLeft:height*0.025}}>This account cannot be found.Please SignUp or use a different one!</Text>
                    </>
                    }

                  <TouchableOpacity disabled={eventReducer?.loading ? true:false} onPress={handleSubmit} style={{paddingHorizontal:height*0.1,backgroundColor:colors.primaryText,width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.1,borderRadius:height*0.007,}}>
                     
                     {
                      eventReducer?.loading ? 
                      <>
                        <ActivityIndicator size={height*0.026} color={'#FFFFFF'} />
                      </>
                      :
                      <>
                      <Text style={{color:'white',alignSelf:'center',fontFamily:Fonts.bold,fontSize:height*0.018}}>{"NEXT"}</Text>
                      </>
                     }
                  </TouchableOpacity>
                </>

            )}
                

            </Formik>

          </Animated.View>
        </>
      }

        <TouchableOpacity  onPress={()=>navigation.navigate('ForgotPassword')} style={{marginTop:height*0.06,alignSelf:'center'}}>
           <Text style={{color:colors.primaryText,alignSelf:'center',fontFamily:Fonts.bold,fontSize:height*0.018,}}>Forgot Password?</Text>

        </TouchableOpacity>

        <Text style={{color:colors.secondary,margin:height*0.03,marginTop:height*0.05,alignSelf:'center',fontFamily:Fonts.regular,fontSize:height*0.018}}>
          Sign in using 
        </Text>

        <TouchableOpacity style={{alignSelf:'center',}}>
            <Image source={require('../../../assets/images/google.png')} style={{height:height*0.05,width:height*0.05,alignSelf:'center'}} resizeMode='contain' />
        </TouchableOpacity> 
        <View style={{margin:height*0.03,flexDirection:'row',justifyContent:'center'}}>
          <Text style={{fontFamily:Fonts.regular,color:'gray',fontSize:height*0.017}}>Don't have Zoho account? </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
            <Text style={{color:colors.primaryText,alignSelf:'center',fontFamily:Fonts.bold,fontSize:height*0.017}}>Sign up now!</Text>
          </TouchableOpacity>
        </View>

    </View>
  )
} 

export default LoginForm;