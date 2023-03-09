import { View, Text, TextInput, TouchableOpacity, Button, ActivityIndicator, Keyboard } from 'react-native'
import React, { FC, useEffect, useReducer, useState } from 'react'
import Animated, { FadeInDown, } from 'react-native-reanimated';
import { Formik, FormikProps, FormikValues } from 'formik';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../Hooks/hooks';
import { loginController } from '../store/store';
import requestStatus, { initial_state } from '../utils/LoaderHandling';
import { passwordSchema } from './YupSchema/Schema';
import { Fonts } from '../utils/Fonts';
import { create } from 'react-test-renderer';


type Props = {
    height:number,
    width:number,
    inputStr:string,
    btnStr:string,
    nvgStr:string,
    user:{email:string},
    setUser:any,
}
type FocusBool = true|false;


const AuthAnimated:FC<Props> = ({height,width,inputStr,btnStr,user,setUser}:Props):JSX.Element =>{


    const [focus,setFocus] = useState<FocusBool>(false);
    const [inValidCred,setInValidCred] = useState<FocusBool>(false);
    const initialValues: FormikValues = { password: '' };
    const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const dispatch = useAppDispatch();





    const LoginFn = async(values : FormikValues):Promise<void> =>{
        const {password} = values;
        if(user.email&&password!==''){
          try {
            Keyboard.dismiss();
            setEventReducer({type:'loading'});
            const {data} = await axios('/auth/login',{method:'POST',data:{email:user.email,password:password}});
            setInValidCred(false);
            
            if(data){
                delete data.message;
                const createHeader = axios.create({
                  headers: {
                    Authorization : `Bearer ${data.token}`
                    }
                })
                const {profile} = ((await createHeader('/auth/profile',{timeout:5000,method:'GET'})).data);
                const data1 = await createHeader.get('organization/user-organizations');
                if(data1){
                  const {organizations} = data1.data;
                  const orgNewUser = organizations.length>0 ? false:true
                  dispatch(loginController({token:data.token,orgNewUser:orgNewUser,profile:profile}));
                  setEventReducer({type:'success'});
                }
            }
            else{
            setEventReducer({type:'error'});
    
            }
          } catch (err:any) {
              setEventReducer({type:'error'});
              setInValidCred(true);
          }
        }
         
       
     
    }
    
    


    return (
      <Animated.View  entering={FadeInDown.duration(300)} >
        

        <Formik validationSchema={passwordSchema} initialValues={initialValues} onSubmit={LoginFn} validateOnBlur={false} validateOnChange={false}>
            
            {({ handleChange, handleBlur, handleSubmit, values, errors }:FormikProps<FormikValues>) => (
              <>
                <TextInput placeholderTextColor={'gray'} onChangeText={handleChange('password')} value={values.email} onBlur={()=>{handleBlur('password'),setFocus(false)}} secureTextEntry={true} onFocus={()=>setFocus(true)}  placeholder={inputStr} style={{color:colors.secondary,paddingLeft:height*0.01,paddingBottom:height*0.02,fontFamily:Fonts.regular,width:width*0.9,alignSelf:'center',borderBottomColor:focus ? colors.primaryText: 'lightgray',borderBottomWidth:1,fontSize:height*0.018,marginTop:height*0.02}} />
                {inValidCred?
                    <>
                      <Text style={{color:'red',fontFamily:Fonts.regular,margin:height*0.018,marginLeft:height*0.025}}>Incorrect password. Please try again.</Text>
                    </>
                    :
                    <>
                    </>
                }
                
                    {(errors.password) &&  <><Text style={{color:'red',fontFamily:Fonts.regular,margin:height*0.02,marginLeft:height*0.025}}>
                    {errors.password.toString()}
                    </Text></>}
                
                <TouchableOpacity disabled={eventReducer?.loading?true:false} onPress={handleSubmit} style={{paddingHorizontal:height*0.1,backgroundColor:colors.primaryText,width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.08,borderRadius:height*0.008}}>
                      {
                      eventReducer?.loading ? 
                      <>
                        <ActivityIndicator size={height*0.026} color={'#FFFFFF'} />
                      </>
                      :
                      <>
                      <Text style={{color:'white',alignSelf:'center',fontFamily:Fonts.bold,fontSize:height*0.020}}>{btnStr}</Text>
                      </>
                     }
                </TouchableOpacity>
              </>
          )}
                

          </Formik>
      </Animated.View>
    )
}

export default AuthAnimated;