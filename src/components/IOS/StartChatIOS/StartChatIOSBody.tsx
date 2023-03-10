import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import React, { FC } from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import Ion from 'react-native-vector-icons/Ionicons';
import StartChatIOSList from './StartChatIOSList';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackIOSParams } from '../../../router/IOSNavigators/AppStackIOS';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'


type AppProps = {
    height:number,
    width:number,
}

const StartChatIOSBody:FC<AppProps> = ({height,width}) => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);
  const navigation = useNavigation<StackNavigationProp<AppStackIOSParams,'StartChat'>>();

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>

      <View style={{height:height*0.05,backgroundColor:colors.zLgray,width:width*0.9,alignSelf:'center',borderRadius:height*0.01}}>
          <View style={{flexDirection:'row',height:height*0.05,alignItems:'center',}}>
            <Ion name='ios-search' style={{margin:height*0.012}} size={height*0.025} color={colors.iconLight}  />
            <TextInput placeholder='Type name to search' placeholderTextColor={colors.placeholderColor} style={{width:width*0.7,height:height*0.05,fontSize:height*0.018,color:colors.secondary}} />
          </View>
      </View>
      <StartChatIOSList height={height} width={width} />
     
    <Pressable  onPress={()=>navigation.navigate('Invite')} style={{backgroundColor:colors.zBlue,height:height*0.06,width:height*0.06,borderRadius:height,position:'absolute',alignItems:'center',justifyContent:'center',top:height*0.7,left:'80%'}}>
      <Material name='plus' size={height*0.028}  color={'white'} />

    </Pressable>

     
    </KeyboardAvoidingView>  
  )
}

export default StartChatIOSBody