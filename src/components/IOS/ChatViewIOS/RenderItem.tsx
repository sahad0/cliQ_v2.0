import { View, Text, StyleSheet, Image, TextInput, Platform } from 'react-native'
import React, { Dispatch, MutableRefObject, SetStateAction, memo, useCallback, useMemo } from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { height, width } from '../../../utils/Dimension';
import { FlatList, Gesture, GestureDetector, PanGestureHandler } from 'react-native-gesture-handler';
import moment from 'moment';
import { AndroidColors, IosColors } from '../../../utils/Colors';
import Ion from 'react-native-vector-icons/Ionicons'
import { RenderType } from './ChatViewIOSBody';
import { PropRef } from '../../../pages/IOS/ChatListStackIOS/ChatViewIOS';


export type Render = {
    item: RenderType;
    refs: {flatlistRef:React.MutableRefObject<FlatList | null>, inputRef: React.MutableRefObject<TextInput | null>,replyRef:MutableRefObject<PropRef | null>},

}


function RenderItem ({item,refs}:Render):JSX.Element{
    const {profile} = useAppSelector((state)=>state.cart.auth.value);
    const itemLength = item.update_history[0].content.length<20;
   
    const value = useSharedValue<number>(0);

   const replyHandling = (item:RenderType)=>{
    refs.replyRef.current?.setReplyFn(item);
   }

    // const gestureEvent = useAnimatedGestureHandler({
    //     onActive:(e)=>{
    //         if(e.translationX>0 && e.translationX<width*0.3){
    //             value.value = e.translationX;
    //         }
    //     },
    //     onEnd:()=>{
    //         value.value = withSpring(0) ;
    //         if(value.value>width*0.2){
    //                 runOnJS(replyHandling)(item);
    //         }



    //     }
    // })

    const gesture = useMemo(() => {
        return Gesture.Pan().onUpdate((e)=>{
          if(e.translationX>0 && e.translationX<width*0.3){
            value.value = e.translationX;
          }
        }).onEnd((e)=>{
          value.value = withSpring(0) ;
          if(value.value>width*0.2){
            runOnJS(replyHandling)(item);
          }
        }).failOffsetY([-5, 5]).activeOffsetX([-5, 5]);
      }, [item, value, width]);

  
    const animatedStyle = useAnimatedStyle(() => 
    ({
        transform: [{ translateX: value.value }],
    }),[value]);




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

    console.log("RenderItem");

 


        return(
        <>
            {
                item.sender.id===profile?.user_id ?
                
                <View style={[styles.parent,styles.jFlexEnd]}>
                    <View style={styles.userGap}>
                        <Text style={styles.nameStyle}>You</Text>

                        <View style={styles.userHolder}>
                           <View style={[styles.subHolder,renderStyle.directionStyle]}>
                                <Text style={[styles.contentStyle1]}>{item.update_history[0].content}</Text>
                                <View style={[styles.iconHolderStyle,renderStyle.alignerStyle]}>
                                    <Text style={styles.timeStampStyle1}>{(moment(item.update_history[0].updated_at).format('h:mm a').toUpperCase())}</Text>
                                    <Ion name='ios-checkmark-done' color={'white'} size={height*0.02} style={styles.iconStyle}  />
                                </View>
                            </View>
                        </View>

                    </View>
                </View>

                :
                <GestureDetector gesture={gesture} >
          
                <Animated.View style={[styles.parent,animatedStyle,styles.widthStyle]}>
                    <Image source={item.sender.img_url} style={styles.imgStyle} />
                    <View style={styles.itemGap}>
                        <Text style={styles.nameStyle}>{item.sender.name}</Text>

                        <View style={styles.itemHolder}>
                           <View style={[styles.subHolder,renderStyle.directionStyle]}>
                                <Text style={styles.contentStyle}>{item.update_history[0].content}</Text>
                                
                                <View style={[styles.iconHolderStyle,renderStyle.alignerStyle]}>
                                    <Text style={styles.timeStampStyle}>{(moment(item.update_history[0].updated_at).format('h:mm a').toUpperCase())}</Text>
                                    <Ion name='ios-checkmark-done' color={'lightblue'} size={height*0.02} style={styles.iconStyle}  />
                                </View>
                            </View>
                        </View>
                    </View>
                </Animated.View>
                </GestureDetector>
            }
        </>
    )
};

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

export default memo(RenderItem);