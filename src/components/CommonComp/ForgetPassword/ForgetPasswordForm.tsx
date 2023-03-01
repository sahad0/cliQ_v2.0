import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { FC, useReducer, useState } from 'react'
import axios from 'axios'
import { Formik, FormikProps, FormikValues } from 'formik'
import {  useNavigation } from '@react-navigation/native'
import {  NativeStackNavigationProp } from '@react-navigation/native-stack'
import requestStatus, { initial_state } from '../../../utils/LoaderHandling'
import { AuthStackParams } from '../../../router/Common/AuthNav'
import { emailSchema } from '../../../Extra/YupSchema/Schema'
import { Fonts } from '../../../utils/Fonts'
import { useAppSelector } from '../../../Hooks/hooks'

type Props = {
    height:number,
    width:number,
}
type focusBool = true|false;
type Error = true |false;
interface Values {
  email:string
}


 const ForgetPasswordForm:FC<Props> = ({height,width,}):JSX.Element => {

  const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
  const [focus,setFocus] = useState<focusBool>(false);

  const [handleError,setHandleError] = useState<Error>(false);
  const {colors} = useAppSelector((state)=>state.cart.color.value);


  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams,'ForgotPassword'>>();


  const handleEmail = async(values:FormikValues):Promise<void>=>{

    try {
      setHandleError(false);

      setEventReducer({type:'loading'});
      const {data} = await axios.post('/auth/check-email',{email:values.email});
      if(data){
        const {exists} = data;
        if(exists){
          const sentOtp = await axios.post('/auth/email-otp',{email:values.email});
          setEventReducer({type:'success'});
          navigation.navigate('OtpVerifyForgotPass',{email:values.email});

        }
        else{
          setEventReducer({type:'error'});
          setHandleError(true);

        }
      }
    } catch (error) {
      setEventReducer({type:'error'});
      
    }

  }



  return (
    <View style={{marginTop:height*0.04,height:'100%'}}>
      <Formik validateOnBlur={false} validateOnChange={false} validationSchema={emailSchema} initialValues={{email:''}} onSubmit={handleEmail}>
            
            {({ handleChange, handleBlur, handleSubmit,values ,errors }:FormikProps<Values>):JSX.Element => (
              
            <>
                 <TextInput placeholderTextColor={'gray'} onChangeText={handleChange('email')}  onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} placeholder={'Email'} style={{paddingLeft:height*0.01,paddingBottom:height*0.02,color:colors.secondary,fontFamily:Fonts.regular,width:width*0.9,alignSelf:'center',borderBottomColor:focus ? colors.primaryText: 'lightgray',borderBottomWidth:1,fontSize:height*0.018,marginTop:height*0.06}} />
                 {(errors.email) &&  <><Text style={{fontSize:height*0.015,color:'red',fontFamily:Fonts.regular,margin:height*0.02,marginLeft:height*0.025}}>
                            {errors.email.toString()}
                          </Text></>}

                  {handleError && (
                    <><Text style={{fontSize:height*0.015,color:'red',fontFamily:Fonts.regular,margin:height*0.02,marginLeft:height*0.025}}>
                    {'No account Found!'}
                  </Text></>
                  )}
                  <TouchableOpacity disabled={eventReducer?.loading ? true:false} onPress={handleSubmit} style={{borderRadius:height*0.008,paddingHorizontal:height*0.1,backgroundColor:colors.primaryText,width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.1}}>
                      
                  {
                              eventReducer?.loading ? 
                              <>
                                <ActivityIndicator size={height*0.026} color={'#FFFFFF'} />

                              </>
                              :
                              <>
                                <Text style={{color:'white',alignSelf:'center',fontFamily:Fonts.bold,fontSize:height*0.018}}>{'SENT OTP'}</Text>
        
                              </>
                  }
        
                  </TouchableOpacity>
            </>
            )}
            </Formik>
    </View>
  )
}

export default ForgetPasswordForm;