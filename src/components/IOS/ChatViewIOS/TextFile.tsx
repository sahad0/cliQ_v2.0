import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React, { Dispatch, ForwardedRef, MutableRefObject, SetStateAction, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'
// import { height, width } from '../../../utils/Dimension'
import { TouchableOpacity } from 'react-native'
import { Pressable } from 'react-native'
import { TextInput } from 'react-native'
import Antd from 'react-native-vector-icons/AntDesign'
import Ion from 'react-native-vector-icons/Ionicons'
import { AndroidColors, IosColors } from '../../../utils/Colors'
import { useAppSelector } from '../../../Hooks/hooks'
import FontAws from 'react-native-vector-icons/FontAwesome'
import { RenderType } from './ChatViewIOSBody'
import { PropRef } from '../../../pages/IOS/ChatListStackIOS/ChatViewIOS'

type AppProps = {

}


const TextFile = forwardRef((props:AppProps,ref:ForwardedRef<PropRef>) => {

    const [myMessage,setMyMessage] = useState<string>();
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const inputRef = useRef<TextInput | null>(null);
    const [reply,setReply] = useState<null | RenderType>(null);
    const {height,width} = useWindowDimensions();

    

    useImperativeHandle(ref, () => ({
        setReplyFn:(item:RenderType)=>{
            setReply(item);
        },
    }));






  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        
            
    <View style={{maxHeight:height*0.45,flexDirection:'column', borderColor:'lightgray',borderWidth:0.8,borderRadius:height*0.04,width:width*0.96,alignSelf:'center',marginBottom:height*0.015,}}>
       {
        reply!==null &&(
        <View style={{maxHeight:height*0.12,minHeight:height*0.08,maxWidth:'90%',minWidth:'90%',margin:'4%',flexDirection:'row',backgroundColor:'#F5F5F5',borderRadius:height*0.01}}>
           
            <View style={{height:'85%',width:'1%',backgroundColor:colors.zBlue,borderRadius:height,alignSelf:'center',marginLeft:'2%'}} />
            
            <View style={{margin:'5%',marginTop:0,width:'90%'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{color:colors.zBlue,marginBottom:0,marginTop:'5%',fontSize:height*0.018}}>{reply?.sender.name}</Text>
                    <TouchableOpacity onPress={()=>setReply(null)}>
                        <Ion  color={colors.zGray} size={height*0.025} name='ios-close-circle-outline' />
                    </TouchableOpacity>
                </View>
                <Text style={{width:'100%',color:colors.zGray,marginTop:'1%',marginBottom:'5%',fontSize:height*0.015}} numberOfLines={3} ellipsizeMode='tail'>{reply?.update_history[0].content}</Text>
            </View>
       
        </View>
        )
       }
        

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:'1%',}}>
        
        <View style={{flex:1}}>
            <Pressable style={{alignSelf:'center'}}>
                <Antd name='pluscircle' color={colors.zGray} size={height*0.035}/>
            </Pressable>
        </View>
        <View style={{flex:7}}>
            <TextInput style={{fontSize:height*0.018,color:colors.secondary}} ref={inputRef}  onChangeText={(e)=>setMyMessage(e)} value={myMessage} placeholderTextColor={colors.placeholderColor} placeholder='Type your message here..' />
        </View>
        <View style={{flex:1}}>
            <TouchableOpacity style={{height:height*0.04,width:height*0.04,backgroundColor:'white',borderRadius:height,justifyContent:'center',alignItems:'center'}}>
                <FontAws name='send' color={IosColors.colors.zBlue} size={height*0.022}  />
            </TouchableOpacity>
        </View>

        </View>
    </View>


</KeyboardAvoidingView>
  )
})

const styles = StyleSheet.create({
 

})

export default TextFile