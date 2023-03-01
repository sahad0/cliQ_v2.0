import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Pressable } from 'react-native'
import React, { FC, useEffect, useReducer, useState } from 'react'
import { Formik, FormikProps, FormikValues } from 'formik'
import axios from 'axios'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import requestStatus, { initial_state } from '../../../utils/LoaderHandling'
import { AuthStackParams } from '../../../router/Common/AuthNav'
import { otpSchema } from '../../../Extra/YupSchema/Schema'
import { Fonts } from '../../../utils/Fonts'
import { useAppSelector } from '../../../Hooks/hooks'

type Props = {
    height:number,
    width:number,
}
type Values = {
    otp :string,
}
type focusBool = true|false;

 const OtpVerifyFormForgotPass:FC<Props> = ({width,height}):JSX.Element => {

    const [focus,setFocus] = useState<focusBool>(false);
    const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
    const [error,setError] =  useState<focusBool>(false);
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams,'OtpVerifyForgotPass'>>();
    const {params:{email}} = useRoute<RouteProp<AuthStackParams,'OtpVerifyForgotPass'>>();
    const [showTimer,setShowTimer] = useState<focusBool>(true);
    const [counter,setCounter] = useState<number>(59);
    const {colors} = useAppSelector((state)=>state.cart.color.value);

   
 



    useEffect(()=>{        
        if(counter<1){
            setShowTimer(false);
        }
        else {
            setTimeout(() => setCounter(counter - 1), 1000);
        }
    },[counter]);

    const handlePasswordChange = async(values:FormikValues):Promise<void>=>{
        try {
            setError(false);
            setEventReducer({type:'loading'});
            const {data} = await axios.post('/auth/check-otp',{email:email,otp:values.otp});
            if(data){
                const {isValid} = data;
                const user = {email:email,otp:values.otp}

                if(isValid){
                    setEventReducer({type:'success'});
                    navigation.navigate('ResetPassword',{user:user});
                }
                else{
                    setError(true);
                    setEventReducer({type:'error'});

                }
                
            }
        } catch (error) {
            
        }
    }



    const runTimer  = async()=>{
        try{
            setCounter(59);
            setShowTimer(true);
            const sentOtp = await axios.post('/auth/email-otp',{email:email});
        }
        catch(err){
            console.log(err);
        }
    }

   



  return (
    <>
        <View style={{marginTop:height*0.084}}>
        <Formik validateOnBlur={false} validateOnChange={false} validationSchema={otpSchema} initialValues={{otp:''}} onSubmit={handlePasswordChange}>
            
            {({ handleChange, handleBlur, handleSubmit,values ,errors }:FormikProps<Values>) => (
              
            <>
                 <TextInput placeholderTextColor={'gray'} onChangeText={handleChange('otp')} maxLength={6} keyboardType='number-pad' onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} placeholder={'OTP *'} style={{color:colors.secondary,paddingBottom:height*0.02,paddingLeft:height*0.01,fontFamily:Fonts.regular,width:width*0.9,alignSelf:'center',borderBottomColor:focus ? '#159AFF': 'lightgray',borderBottomWidth:1,fontSize:height*0.018,marginLeft:height*0.02}} />
                 {(errors.otp) &&  <><Text style={{fontSize:height*0.015,color:'red',fontFamily:Fonts.regular,margin:height*0.02,marginLeft:height*0.035}}>
                            {errors.otp.toString()}
                          </Text></>}
                {error &&(
                    <>
                    <Text style={{fontSize:height*0.015,color:'red',fontFamily:Fonts.regular,margin:height*0.02,marginLeft:height*0.035}}>
                            {'Invalid OTP,Please try again!'}
                          </Text>
                    </>
                )}

                {
                    showTimer ? 
                        <>
                            <View style={{flexDirection:'row',margin:height*0.03,marginTop:height*0.04}}>
                                <Text style={{color:colors.secondary,fontFamily:Fonts.regular,fontSize:height*0.018}}> Resend Otp in</Text>
                                <Text style={{color:'#159AFF',marginLeft:width*0.02,fontSize:height*0.018}}>{counter + " s"}</Text>
                            </View>
                        </>
                        :
                        <View style={{flexDirection:'row',margin:height*0.03,marginTop:height*0.04,alignItems:'center',}}>
                           <Text style={{color:colors.secondary,fontFamily:Fonts.regular,fontSize:height*0.018}}>No code Recieved?</Text>
                           <TouchableOpacity onPress={runTimer} style={{alignSelf:'flex-start'}} >
                                <Text style={{color:'#159AFF',marginLeft:width*0.02,fontSize:height*0.018,}}>Resend OTP</Text>
                            </TouchableOpacity> 
                        </View>
                }

                  <TouchableOpacity disabled={eventReducer?.loading ? true:false} onPress={handleSubmit} style={{borderRadius:height*0.008,paddingHorizontal:height*0.1,backgroundColor:colors.primaryText,width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.08,}}>
                      
                  {
                              eventReducer?.loading ? 
                              <>
                                <ActivityIndicator size={height*0.026} color={'#FFFFFF'} />
                              </>
                              :
                              <>
                                <Text style={{color:'white',alignSelf:'center',fontFamily:Fonts.bold,fontSize:height*0.018}}>{'VERIFY'}</Text>
        
                              </>
                  }
        
                  </TouchableOpacity>
            </>
            )}
            </Formik>
        </View>
    </>
  )
}

export default OtpVerifyFormForgotPass;