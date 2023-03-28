import { View, Text, StyleSheet } from 'react-native'
import React, { Dispatch, SetStateAction, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'
import { height, width } from '../../../utils/Dimension'
import { TouchableOpacity } from 'react-native'
import { Pressable } from 'react-native'
import { TextInput } from 'react-native'
import Antd from 'react-native-vector-icons/AntDesign'
import { AndroidColors, IosColors } from '../../../utils/Colors'
import { useAppSelector } from '../../../Hooks/hooks'
import FontAws from 'react-native-vector-icons/FontAwesome'
import { RenderType } from './ChatViewIOSBody'
import { ForwarRefComponent } from 'react-native-paper/lib/typescript/utils/forwardRef'

export type PropRef = {
    current: {
        setReplyFn:(item:RenderType)=>void,
    }

}
type AppProps = {

}


const TextFile:ForwarRefComponent<AppProps, PropRef> = forwardRef((props,ref) => {

    const [myMessage,setMyMessage] = useState<string>();
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const inputRef = useRef<TextInput | null>(null);
    const [reply,setReply] = useState<null | RenderType>(null);

    useEffect(()=>{
        console.log("Changed");
    },[reply])


    useImperativeHandle(ref, () => ({
        setReplyFn:(item:RenderType)=>{
            console.log("wow");
        },
    }));





  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            
    <View style={{flexDirection:'column', borderColor:'lightgray',borderWidth:0.8,borderRadius:height*0.04,width:width*0.96,alignSelf:'center',marginBottom:height*0.015}}>
        {reply!==null &&
        (
            <View style={{height:height*0.18,backgroundColor:'white'}}>
                <TouchableOpacity >
                    <Antd name='close' color={colors.secondary} size={height*0.014} style={{marginLeft:height*0.01,padding:'1%',borderRadius:height,marginRight:'6%',borderWidth:height*0.0005,alignSelf:'flex-end'}} />
                </TouchableOpacity>
            </View>

        )}

        <View style={[styles.inputHolderStyle]}>
        
        
            <Pressable>
                <Antd name='pluscircle' color={colors.zGray} size={height*0.035}/>
            </Pressable>
            <TextInput ref={inputRef} onChangeText={(e)=>setMyMessage(e)} value={myMessage} placeholderTextColor={colors.placeholderColor} placeholder='Type your message here..' style={styles.inputStyle}/>
            <TouchableOpacity style={{height:height*0.04,width:height*0.04,backgroundColor:'white',borderRadius:height,justifyContent:'center',alignItems:'center'}}>
                <FontAws name='send' color={IosColors.colors.zBlue} size={height*0.022}  />
            </TouchableOpacity>


        </View>
    </View>


</KeyboardAvoidingView>
  )
})

const styles = StyleSheet.create({
    parent:{
        margin:height*0.01,
        flexDirection:'row',
        
    },
    jFlexEnd:{
        justifyContent:'flex-end'
    },
    imgStyle:{
        height:width*0.08,
        width:width*0.08,
        borderRadius:height,
    },
    userGap:{
        alignItems:'flex-end',
        // marginRight:height*0.03
    },
    itemGap:{
        marginLeft:height*0.01
    },
    nameStyle:{
        color:IosColors.colors.zGray,
        fontSize:height*0.016
    },
    itemHolder:{
        backgroundColor:'#F8F8F8',
        marginTop:height*0.01,
        borderRadius:height*0.01,
        maxWidth:width*0.75,
    },
    userHolder:{
        backgroundColor:Platform.OS==='ios'?IosColors.colors.zBlue:IosColors.colors.zBlue,
        marginTop:height*0.01,
        borderRadius:height*0.01,
        maxWidth:width*0.7,
    },
    subHolder:{
        margin:height*0.015,
        maxWidth:width*0.7,
        alignItems:'flex-end'
    },
    contentStyle:{
        color:'black',
        fontSize:height*0.018
    },
    contentStyle1:{
        color:'white',
        fontSize:height*0.018
    },
    iconHolderStyle:{
        flexDirection:'row',
        alignItems:'center',
    },
    timeStampStyle:{
        color:'gray',
        fontSize:height*0.015,
    },
    timeStampStyle1:{
        color:'white',
        fontSize:height*0.015,
    },
    iconStyle:{
        marginLeft:height*0.006
    },

    inputHolderStyle:{
        backgroundColor:Platform.OS ==='android'?AndroidColors.colors.primary:IosColors.colors.primary,
     
        // height:height*0.055,
    
        alignSelf:'center',
        borderRadius:height*0.04,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        }
    ,
    inputStyle:{
        height:height*0.05,
        width:width*0.7,
        backgroundColor:Platform.OS ==='android'?AndroidColors.colors.primary:IosColors.colors.primary,
        fontSize:height*0.018,
        // margin:'6%',
        // marginLeft:'1%',
        marginRight:0,
        color:Platform.OS ==='android'?AndroidColors.colors.secondary:IosColors.colors.secondary,
        
    },
    widthStyle:{
        alignSelf:'flex-start',


    }

})

export default TextFile