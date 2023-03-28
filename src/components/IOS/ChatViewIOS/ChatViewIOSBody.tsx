import { View, Text, KeyboardAvoidingView, ListRenderItem, ImageSourcePropType, Image, TextInput, Platform, StyleSheet, TouchableOpacity, Keyboard } from 'react-native'
import React, { Dispatch, FC, ForwardedRef, MutableRefObject, ReactNode, SetStateAction, forwardRef, memo, useCallback, useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../Hooks/hooks';
import moment from 'moment';
import Ion from 'react-native-vector-icons/Ionicons'
import Antd from 'react-native-vector-icons/AntDesign'
import FontAws from 'react-native-vector-icons/FontAwesome'
import { height,width } from '../../../utils/Dimension';
import { AndroidColors, IosColors } from '../../../utils/Colors';
import { Pressable } from 'react-native';
import { txtClearController, txtMsgController } from '../../../store/messageStore';
import { SocketContext } from '../../../context/SocketContext';
import { Gesture, GestureDetector, GestureHandlerRootView, PanGestureHandler, FlatList, GestureEventPayload, GestureEvent, PanGestureHandlerEventPayload, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import  Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { data } from '../../../../data';
import RenderItem from './RenderItem';
import { PropRef } from '../../../pages/IOS/ChatListStackIOS/ChatViewIOS';

type AppProps = {
    height:number,
    width:number,
    replyRef:MutableRefObject<PropRef>
}
export type RenderType = {
    id:string,
    sender: { 
        id: string; 
        name: string; 
        img_url: ImageSourcePropType; 
    },
    is_private: boolean,
    reciever: {
        id: string;
        name: string;
        img_url: any;
    },
    update_history: { 
        content: string,
        updated_at: string
    }[]; 

}










const ChatViewIOSBody:FC<AppProps> = ({height,width,replyRef}):JSX.Element => {

    const flatlistRef = useRef<FlatList | null>(null);
    const inputRef = useRef<TextInput | null>(null);
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const {profile,orgId} = useAppSelector((state)=>state.cart.auth.value);
    const {message,chatId,textMsg} = useAppSelector((state)=>state.cart.message.value);
    const { socket } = React.useContext(SocketContext);
    const [myMessage,setMyMessage] = useState<string>();
    const dispatch = useAppDispatch();
    
    


    const renderItem:ListRenderItem<RenderType> = ({item})=> <RenderItem item={item} refs={{flatlistRef:flatlistRef,inputRef:inputRef,replyRef:replyRef}}  />
    const keyExtractor = (item:RenderType):string => item.id;
   
    useEffect(()=>{
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            handleKeyboardDidHide
          );
      
          return () => {
            keyboardDidHideListener.remove();
          };
    },[]);
  
    const handleKeyboardDidHide = () => {
      if (inputRef.current) {
        inputRef.current.blur();
      }
    };


    const sendText = ()=>{
        socket?.emit('create-message',
        {

            organization_id: orgId,
            is_private: true,
            chat_id: chatId,
            content: textMsg,
            reply_to: '',
        });
        dispatch(txtClearController());
    }







    return (
        <GestureHandlerRootView style={{flex:1,}}>
            <FlatList ref={flatlistRef} data={data} inverted={true} renderItem={renderItem} keyExtractor={keyExtractor} style={{width:width}} />
        </GestureHandlerRootView>
    )
}



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

export default ChatViewIOSBody;