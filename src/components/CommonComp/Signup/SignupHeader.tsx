import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams } from '../../../router/Common/AuthNav';
import { Fonts } from '../../../utils/Fonts';
import { useAppSelector } from '../../../Hooks/hooks';


type AppProps = { height: number,width:number,};

 const SignupHeader:FC<AppProps> = ({height,width,}):JSX.Element => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);


  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams,'SignUp'>>();

  return (
    <>
        <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Image source={require('../../../assets/images/zoho.png')}  style={{height:height*0.11,width:height*0.11,marginTop:0}} resizeMode={'contain'}  />
            <View style={{flexDirection:'row',margin:height*0.018,marginBottom:0,marginTop:0}}>
                <Text style={{fontFamily:Fonts.regular,color:colors.secondary,fontSize:height*0.018}}>Have a Zoho Account ? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text style={{color:'red',fontFamily:Fonts.regular,fontSize:height*0.018}}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{height:height*0.0008,backgroundColor:colors.primary,width:width*0.95,alignSelf:'center'}} />

    </>
  )
}



export default SignupHeader;

