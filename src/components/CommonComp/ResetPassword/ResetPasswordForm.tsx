import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { FC, useReducer, useState } from 'react'
import { Formik, FormikProps, FormikValues } from 'formik'
import axios from 'axios'
import { Keyboard } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import requestStatus, { initial_state } from '../../../utils/LoaderHandling'
import { AuthStackParams } from '../../../router/Common/AuthNav'
import { resetPasswordSchema } from '../../../Extra/YupSchema/Schema'
import { useAppSelector } from '../../../Hooks/hooks'
import { Fonts } from '../../../utils/Fonts'


type Values = {
    password:string,
    passwordConfirmation:string
}
// type Success = true|false;
type focusBool = {
    focus1:boolean,
    focus2:boolean,
}
type AppProps = {
    width:number,
    height:number,
}
type Success = 'success'|'failure'|'';
 const  ResetPasswordForm:FC<AppProps> = ({width,height}):JSX.Element => {


  const [focus,setFocus] = useState<focusBool>({focus1:false,focus2:false});
  const [success,setSuccess] = useState<Success>('');
  const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams,'ForgotPassword'>>();
  const {params:{user}} = useRoute<RouteProp<AuthStackParams,'ResetPassword'>>();
  const {colors} = useAppSelector((state)=>state.cart.color.value);
  
  const initialValue:Values = {password:'',passwordConfirmation:''}


    const handlePasswordChange = async(values:FormikValues):Promise<void>=>{
      setSuccess('');
        try {
            setEventReducer({type:'loading'});
            const changePass = await axios.post('/auth/reset-password',{...user,password:values.passwordConfirmation});
            if(changePass.data.message){
                setEventReducer({type:'success'});
                setSuccess('success');
                Keyboard.dismiss();
                setTimeout(()=>{
                    navigation.navigate('Login');
                },1000);
                
            }
        } 
        catch(err:any){
          setSuccess('failure');
          setEventReducer({type:'error'});

        }
        
    }

  return (
    <View style={{marginTop:height*0.08}}>
    <Formik  validateOnBlur={false} validateOnChange={false} validationSchema={resetPasswordSchema} initialValues={initialValue} onSubmit={handlePasswordChange}>
            
    {({ handleChange, handleBlur, handleSubmit,values ,errors }:FormikProps<Values>) => (
      
        <>
          <TextInput placeholderTextColor={'gray'} onChangeText={handleChange('password')} value={values.password} onFocus={()=>setFocus({...focus,focus1:true})}  onBlur={()=>{handleBlur('email'),setFocus({...focus,focus1:false})}} placeholder={"Password *"} style={{color:colors.secondary,fontFamily:Fonts.regular,width:width*0.9,alignSelf:'center',borderBottomColor:focus.focus1 ? colors.primaryText: 'lightgray',borderBottomWidth:1,fontSize:height*0.018,paddingLeft:height*0.01,paddingBottom:height*0.02}} secureTextEntry />
          <TextInput placeholderTextColor={'gray'} secureTextEntry={true}  onChangeText={handleChange('passwordConfirmation')} value={values.passwordConfirmation} onFocus={()=>setFocus({...focus,focus2:true})}  onBlur={()=>{handleBlur('email'),setFocus({...focus,focus2:false})}} placeholder={"Confirm Password*"} style={{color:colors.secondary,fontFamily:Fonts.regular,width:width*0.9,alignSelf:'center',borderBottomColor:focus.focus2 ? colors.primaryText: 'lightgray',borderBottomWidth:1,marginTop:height*0.05,fontSize:height*0.018,paddingLeft:height*0.01,paddingBottom:height*0.02,}} />
          {(errors.passwordConfirmation) &&  <><Text style={{fontSize:height*0.015,color:'red',fontFamily:Fonts.regular,margin:height*0.02,marginLeft:height*0.025}}>
                    {errors.passwordConfirmation.toString()}
                  </Text></>}
                  {success==='success' ? <><Text style={{fontSize:height*0.015,color:'green',fontFamily:Fonts.regular,margin:height*0.02,marginLeft:height*0.025}}>
                    {'Password Reset Successfull'}
                  </Text></>
                  :
                  success==='failure'?
                  <>
                  <Text style={{fontSize:height*0.015,color:'red',fontFamily:Fonts.regular,margin:height*0.02,marginLeft:height*0.025}}>{'( New password cannot be same as old password! )'}</Text>
                  </>:<></>}

          <TouchableOpacity disabled={eventReducer?.loading ? true:false} onPress={handleSubmit} style={{borderRadius:height*0.008,paddingHorizontal:height*0.1,backgroundColor:colors.primaryText,width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.1}}>
              
              {
                          eventReducer?.loading ? 
                          <>
                            <ActivityIndicator size={height*0.026} color={'#FFFFFF'} />
                          </>
                          :
                          <>
                            <Text style={{color:'white',alignSelf:'center',fontFamily:Fonts.bold,fontSize:height*0.018}}>{success==='success'?'REDIRECTING..':'CONFIRM'}</Text>
    
                          </>
              }
    
              </TouchableOpacity>

        </>
    )}
    </Formik>
    </View>
  )
}


export default ResetPasswordForm;