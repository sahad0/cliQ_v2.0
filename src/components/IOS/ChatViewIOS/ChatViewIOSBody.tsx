import { View, Text, KeyboardAvoidingView,ListRenderItem, ImageSourcePropType, Image, TextInput, Platform, StyleSheet, TouchableOpacity, Keyboard } from 'react-native'
import React, { FC, ReactNode, memo, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../Hooks/hooks';
import moment from 'moment';
import Ion from 'react-native-vector-icons/Ionicons'
import Antd from 'react-native-vector-icons/AntDesign'
import FontAws from 'react-native-vector-icons/FontAwesome'
import { height,width } from '../../../utils/Dimension';
import { IosColors } from '../../../utils/Colors';
import { Pressable } from 'react-native';
import { txtClearController, txtMsgController } from '../../../store/messageStore';
import { SocketContext } from '../../../context/SocketContext';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import  Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

type AppProps = {
    height:number,
    width:number,
}
type RenderType = {
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
type Render = {
    item:RenderType,
}


const data = [
 
  
    {
        id:'1',
        sender:{
            id:'1',
            name:'Ren',
            img_url:require('../../../assets/images/profPics/5.png'),
        },
        is_private:true,
        reciever:{
            id:'680e7fc4-d135-4f35-83e0-8ef578926fe4',
            name:'Michel',
            img_url:require('../../../assets/images/profPics/6.png'),
        },
        update_history:[
            {
                content: "Lol,great Lets go out for some tonight?",
                updated_at:'2023-01-17T10:19:06.031Z',
            }
        ]
    },
    {
        id:'2',
        sender:{
            id:'680e7fc4-d135-4f35-83e0-8ef578926fe4',
            name:'Michel',
            img_url:require('../../../assets/images/profPics/6.png'),
        },
        is_private:true,
        reciever:{
            id:'1',
            name:'Ren',
            img_url:require('../../../assets/images/profPics/5.png'),
        },
        update_history:[
            {
                content: "Yeh bruh",
                updated_at:'2023-01-17T10:19:06.031Z',
            }
        ]
    },
    {
        id:'3',
        sender:{
            id:'1',
            name:'Ren',
            img_url:require('../../../assets/images/profPics/5.png'),
        },
        is_private:true,
        reciever:{
            id:'680e7fc4-d135-4f35-83e0-8ef578926fe4',
            name:'Michel',
            img_url:require('../../../assets/images/profPics/6.png'),
        },
        update_history:[
            {
                content: "You love Pizza?",
                updated_at:'2023-01-17T10:19:06.031Z',
            }
        ]
    },
    {
        id:'4',
        sender:{
            id:'1',
            name:'Ren',
            img_url:require('../../../assets/images/profPics/5.png'),
        },
        is_private:true,
        reciever:{
            id:'680e7fc4-d135-4f35-83e0-8ef578926fe4',
            name:'Michel',
            img_url:require('../../../assets/images/profPics/6.png'),
        },
        update_history:[
            {
                content: "You love Pizza?",
                updated_at:'2023-01-17T10:19:06.031Z',
            }
        ]
    },
    {
        id:'5',
        sender:{
            id:'680e7fc4-d135-4f35-83e0-8ef578926fe4',
            name:'Michel',
            img_url:require('../../../assets/images/profPics/6.png'),
        },
        is_private:true,
        reciever:{
            id:'1',
            name:'Ren',
            img_url:require('../../../assets/images/profPics/5.png'),
        },
        update_history:[
            {
                content: "Yeh bruh",
                updated_at:'2023-01-17T10:19:06.031Z',
            }
        ]
    },
    {
        id:'6',
        sender:{
            id:'680e7fc4-d135-4f35-83e0-8ef578926fe4',
            name:'Michel',
            img_url:require('../../../assets/images/profPics/6.png'),
        },
        is_private:true,
        reciever:{
            id:'1',
            name:'Ren',
            img_url:require('../../../assets/images/profPics/5.png'),
        },
        update_history:[
            {
                content: "Yeh bruh",
                updated_at:'2023-01-17T10:19:06.031Z',
            }
        ]
    },
    {
        id:'7',
        sender:{
            id:'680e7fc4-d135-4f35-83e0-8ef578926fe4',
            name:'Michel',
            img_url:require('../../../assets/images/profPics/6.png'),
        },
        is_private:true,
        reciever:{
            id:'1',
            name:'Ren',
            img_url:require('../../../assets/images/profPics/5.png'),
        },
        update_history:[
            {
                content: "Yeh bruh",
                updated_at:'2023-01-17T10:19:06.031Z',
            }
        ]
    },
    {
        id:'8',
        sender:{
            id:'680e7fc4-d135-4f35-83e0-8ef578926fe4',
            name:'Michel',
            img_url:require('../../../assets/images/profPics/6.png'),
        },
        is_private:true,
        reciever:{
            id:'1',
            name:'Ren',
            img_url:require('../../../assets/images/profPics/5.png'),
        },
        update_history:[
            {
                content: "Yeh bruh",
                updated_at:'2023-01-17T10:19:06.031Z',
            }
        ]
    },
    {
        id:'9',
        sender:{
            id:'680e7fc4-d135-4f35-83e0-8ef578926fe4',
            name:'Michel',
            img_url:require('../../../assets/images/profPics/6.png'),
        },
        is_private:true,
        reciever:{
            id:'1',
            name:'Ren',
            img_url:require('../../../assets/images/profPics/5.png'),
        },
        update_history:[
            {
                content: "Yeh bruh",
                updated_at:'2023-01-17T10:19:06.031Z',
            }
        ]
    },
    {
        id:'10',
        sender:{
            id:'680e7fc4-d135-4f35-83e0-8ef578926fe4',
            name:'Michel',
            img_url:require('../../../assets/images/profPics/6.png'),
        },
        is_private:true,
        reciever:{
            id:'1',
            name:'Ren',
            img_url:require('../../../assets/images/profPics/5.png'),
        },
        update_history:[
            {
                content: "Yeh bruh",
                updated_at:'2023-01-17T10:19:06.031Z',
            }
        ]
    },
];

const RenderItem:FC<Render> = memo(({item}):JSX.Element=>{
    const {profile} = useAppSelector((state)=>state.cart.auth.value);
    const itemLength = item.update_history[0].content.length<20;
    const value = useSharedValue(0);
    const value1 = useSharedValue(0);

    const gesture = Gesture.Pan().onUpdate((e)=>{
        if(e.translationX>0){
        value.value = e.translationX;
        }
    }).onEnd((e)=>{
        value.value = withTiming(0,{duration:500}) ;
    })
    const animatedStyle = useAnimatedStyle(() => 
        ({
            transform: [{ translateX: value.value }],
        }));
    const renderStyle = StyleSheet.create({
        alignerStyle:{
            marginLeft:itemLength?height*0.025:0,
            margin:itemLength?0:height*0.01,
            marginTop:itemLength?0:height*0.005,
            marginBottom:itemLength?0:0,
            marginRight:0,

        },
        directionStyle:{
            flexDirection:itemLength?'row':'column',
        }
    })

        return(
        <>
            {
                item.sender.id===profile?.user_id ?
                
                <View style={[styles.parent,styles.jFlexEnd]}>
                    <View style={styles.userGap}>
                        <Text style={styles.nameStyle}>You</Text>

                        <View style={styles.userHolder}>
                           <View style={[styles.subHolder,renderStyle.directionStyle]}>
                                <Text style={styles.contentStyle}>{item.update_history[0].content}</Text>
                                <View style={[styles.iconHolderStyle,renderStyle.alignerStyle]}>
                                    <Text style={styles.timeStampStyle}>{(moment(item.update_history[0].updated_at).format('h:mm a').toUpperCase())}</Text>
                                    <Ion name='ios-checkmark-done' color={'rgba(255,255,255,0.4)'} size={height*0.02} style={styles.iconStyle}  />
                                </View>
                            </View>
                        </View>

                    </View>
                </View>

                :
                <GestureDetector   gesture={gesture}>
                <Animated.View style={[styles.parent,animatedStyle]}>
                    <Image source={item.sender.img_url} style={styles.imgStyle} />
                    <View style={styles.itemGap}>
                        <Text style={styles.nameStyle}>{item.sender.name}</Text>

                        <View style={styles.itemHolder}>
                           <View style={[styles.subHolder,renderStyle.directionStyle]}>
                                <Text style={styles.contentStyle}>{item.update_history[0].content}</Text>
                                
                                <View style={[styles.iconHolderStyle,renderStyle.alignerStyle]}>
                                    <Text style={styles.timeStampStyle}>{(moment(item.update_history[0].updated_at).format('h:mm a').toUpperCase())}</Text>
                                    <Ion name='ios-checkmark-done' color={'rgba(255,255,255,0.4)'} size={height*0.02} style={styles.iconStyle}  />
                                </View>
                            </View>
                        </View>
                    </View>

                </Animated.View>
                </GestureDetector>
            }
        </>
    )
});





const ChatViewIOSBody:FC<AppProps> = ({height,width,}):JSX.Element => {
    


    const renderItem:ListRenderItem<RenderType> = ({item})=> <RenderItem item={item} />
    const keyExtractor = (item:RenderType):string => item.id;

    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const {profile,orgId} = useAppSelector((state)=>state.cart.auth.value);

    const {message,chatId,textMsg} = useAppSelector((state)=>state.cart.message.value);
    const { socket } = React.useContext(SocketContext);

    console.log(orgId)

    const dispatch = useAppDispatch();


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
        <View style={{flex:1,}}>
            <Animated.FlatList    data={data} inverted={true} renderItem={renderItem} keyExtractor={keyExtractor}  />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <View style={{backgroundColor:colors.zLgray,height:height*0.055,width:width*0.96,alignSelf:'center',borderRadius:height*0.04,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:height*0.01}}>
                <Pressable>
                    <Antd name='pluscircle' color={colors.zGray} size={height*0.04} style={{marginLeft:height*0.01}} />
                </Pressable>
                <TextInput onChangeText={(e)=>dispatch(txtMsgController(e))} value={textMsg} placeholderTextColor={colors.placeholderColor} placeholder='Type your message here..' style={{height:height*0.05,width:width*0.7,color:'white',fontSize:height*0.018}}/>
                <TouchableOpacity onPress={sendText} style={{height:height*0.04,width:height*0.04,backgroundColor:colors.zBlue,borderRadius:height,marginRight:height*0.01,justifyContent:'center',alignItems:'center'}}>
                    <FontAws name='send' color={colors.secondary} size={height*0.02}  />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </View>
    )
}



const styles = StyleSheet.create({
    parent:{
        margin:height*0.01,
        flexDirection:'row'
    },
    jFlexEnd:{
        justifyContent:'flex-end'
    },
    imgStyle:{
        height:width*0.09,
        width:width*0.09,
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
        fontSize:height*0.017
    },
    itemHolder:{
        backgroundColor:IosColors.colors.zLgray,
        marginTop:height*0.01,
        borderRadius:height*0.01,
        maxWidth:width*0.75,
    },
    userHolder:{
        backgroundColor:IosColors.colors.zBlue,
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
        color:IosColors.colors.secondary,
        fontSize:height*0.019
    },
    iconHolderStyle:{
        flexDirection:'row',
        alignItems:'center',
    },
    timeStampStyle:{
        color:'rgba(255,255,255,0.4)',
        fontSize:height*0.015,
    },
    iconStyle:{
        marginLeft:height*0.006
    }


})

export default ChatViewIOSBody;