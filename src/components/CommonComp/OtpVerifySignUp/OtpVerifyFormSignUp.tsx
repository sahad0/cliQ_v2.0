import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Pressable } from 'react-native'
import React, { FC, useReducer, useState } from 'react'
import { Formik, FormikProps, FormikValues } from 'formik';
import axios from 'axios';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import requestStatus, { initial_state } from '../../../utils/LoaderHandling';
import { useAppDispatch, useAppSelector } from '../../../Hooks/hooks';
import { AuthStackParams } from '../../../router/Common/AuthNav';
import { loginController } from '../../../store/store';
import { otpSchema } from '../../../Extra/YupSchema/Schema';
import { Fonts } from '../../../utils/Fonts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type AppProps = { height: number,width:number,};


type Error = {
  set:boolean,
  message:string,
};

interface Values {
  otp:string
}


  const OtpVerifyFormSignUp:FC<AppProps> = ({height,width}):JSX.Element =>{
      const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
      const [error,setError] = useState<Error>({set:false,message:''});
      const dispatch = useAppDispatch();
      const {colors} = useAppSelector((state)=>state.cart.color.value);

      const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams,'OtpVerifySignUp'>>();
      const {params:{user}} = useRoute<RouteProp<AuthStackParams,'OtpVerifySignUp'>>();


        const style = StyleSheet.create({
            inputField :{
                borderColor:'orange',
                borderWidth:0.8,
                width:width*0.9,
                alignSelf:'center',
                paddingLeft:width*0.04
            }
        });
        const SignUpfn = async (values:object):Promise<void> => {
            try {
                setEventReducer({type:'loading'});
                const val = {...user,...values};
                const {data}=  await axios.post('/auth/register',val);
                if(data){
                  setError({set:false,message:''})
                  dispatch(loginController({token:data.token,orgNewUser:true,profile:null}));
                }
              
                setEventReducer({type:'success'});

            } catch  (err:any) {
              if (err) {
                if(err.request.response && err.response.status===400){
                    let x = JSON.parse(err.request.response).message;
                    setError({set:true,message:x});
                }
                setEventReducer({type:'error'});

      
              }
            }

            
        }





      return (
        <View>
          <View style={{flexDirection:'row',alignItems:'center',paddingTop:height*0.03}}>
          <Image source={require('../../../assets/images/cliq-logo.png') } resizeMode='contain' style={{height:height*0.05,width:height*0.05,margin:height*0.02}} />
                  <Text style={{fontFamily:Fonts.bold,color:colors.secondary,fontSize:height*0.025}}>Cliq</Text>
            </View>
            <Text style={{fontFamily:Fonts.bold,color:colors.secondary,fontSize:height*0.022,marginLeft:width*0.05,}}>Get your team started.</Text>
            <Text style={{fontFamily:Fonts.bold,color:colors.secondary,fontSize:height*0.018,marginLeft:width*0.05,marginTop:height*0.02}}>Verify your sign-up.</Text>

            <Text style={{fontFamily:Fonts.regular,color:colors.secondary,fontSize:height*0.018,marginLeft:width*0.05,marginTop:height*0.02}}>Enter one time Password sent to your </Text>
            <Text style={{fontFamily:Fonts.regular,color:colors.secondary,fontSize:height*0.018,marginLeft:width*0.05,}}>email.</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:Fonts.regular,color:colors.secondary,fontSize:height*0.018,marginLeft:width*0.05,marginTop:height*0.03}}>{user.email}</Text>
                <Pressable onPress={()=>navigation.navigate('SignUp')}>
                  <Text style={{fontFamily:Fonts.bold,color:colors.secondary,fontSize:height*0.018,marginLeft:width*0.02,marginTop:height*0.03,textDecorationLine:'underline'}}>Change</Text>
                </Pressable>
            </View>
        
            <Formik validateOnBlur={false} validateOnChange={false} validationSchema={otpSchema} initialValues={{otp:''}} onSubmit={SignUpfn}>
                
                {({ handleChange, handleBlur, handleSubmit,values ,errors}:FormikProps<Values>):JSX.Element => (<>
                  <TextInput keyboardType='phone-pad' placeholder='OTP *' placeholderTextColor={'gray'} maxLength={6} onChangeText={handleChange('otp')} value={values.otp} style={[style.inputField,{marginTop:height*0.04,color:colors.secondary,fontSize:height*0.018,height:height*0.055,borderRadius:height*0.008}]} />

                {errors.otp && (
                <Text style={{fontSize:height*0.015,color:'red',fontFamily:Fonts.regular,margin:height*0.02,marginLeft:height*0.025}}>
                    {errors.otp.toString()}
                </Text>)}
                {error.set?
                <>
                  <Text style={{fontSize:height*0.015,color:'red',fontFamily:Fonts.regular,margin:height*0.02,marginLeft:height*0.025}}>
                    {error.message}
                </Text>
                </>:null}


                      <Text style={{fontFamily:Fonts.bold,color:colors.secondary,fontSize:height*0.017,marginTop:height*0.03,textDecorationLine:'underline',marginLeft:width*0.05,}}>Resend OTP</Text>


                      <TouchableOpacity disabled={eventReducer?.loading ? true:false} onPress={handleSubmit} style={{borderRadius:height*0.008,paddingHorizontal:height*0.1,backgroundColor:'#F13B32',width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.06}}>
                      {
                                    eventReducer?.loading ? 
                                    <>
                                      <ActivityIndicator size={height*0.026} color={'#FFFFFF'} />
                                    </>
                                    :
                                    <>
                                    <Text style={{color:'white',alignSelf:'center',fontFamily:Fonts.bold,fontSize:height*0.018}}>VERIFY</Text>
                                    </>
                                    
                                  }
                      </TouchableOpacity>
                </>)}
            </Formik>
        </View>
      )
    }


export default OtpVerifyFormSignUp;