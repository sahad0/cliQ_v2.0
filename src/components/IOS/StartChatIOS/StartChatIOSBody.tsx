import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import React, { FC } from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import Ion from 'react-native-vector-icons/Ionicons'
import StartChatIOSList from './StartChatIOSList';
import AddComponent from '../../../Extra/AddComponent';


type AppProps = {
    height:number,
    width:number,
}

const StartChatIOSBody:FC<AppProps> = ({height,width}) => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>

      <View style={{height:height*0.05,backgroundColor:colors.zLgray,width:width*0.9,alignSelf:'center',borderRadius:height*0.01}}>
          <View style={{flexDirection:'row',height:height*0.05,alignItems:'center',}}>
            <Ion name='ios-search' style={{margin:height*0.012}} size={height*0.025} color={colors.iconLight}  />
            <TextInput placeholder='Type name to serach' placeholderTextColor={colors.placeholderColor} style={{width:width*0.7,height:height*0.05,fontSize:height*0.018,color:colors.secondary}} />
          </View>
      </View>
      <StartChatIOSList height={height} width={width} />
      <AddComponent />
     
    </KeyboardAvoidingView>  
  )
}

export default StartChatIOSBody