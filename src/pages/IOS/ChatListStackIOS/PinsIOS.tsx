import { View, Text, SafeAreaView, Dimensions, ImageSourcePropType, ListRenderItem, Image, FlatList, TouchableOpacity, RefreshControl, Pressable } from 'react-native'
import React, { Dispatch, FC, memo, SetStateAction, useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { AppStackIOSParams } from '../../../router/IOSNavigators/AppStackIOS';
import Ion from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { height, width } from '../../../utils/Dimension';
import AddComponent from '../../../Extra/AddComponent';
import Animated, { useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import Antd from 'react-native-vector-icons/AntDesign';
import { PanGestureHandler } from 'react-native-gesture-handler';


type ShowType = boolean

type RenderProp = {
  id:string,
  imgUrl ?:ImageSourcePropType,
  name:string
}
type Render = {
  item :RenderProp,
  showEdit:boolean,
}

type HeaderProp = {
  setShowEdit : Dispatch<SetStateAction<ShowType>>,
  showEdit:ShowType,
}

const ListHeader:FC<HeaderProp> = ({setShowEdit,showEdit}):JSX.Element =>{
  const {colors} = useAppSelector((state)=>state.cart.color.value);
  
  const navigation = useNavigation<StackNavigationProp<AppStackIOSParams,'PinsIOS'>>();
  return(
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:height*0.02,}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ion name='ios-close' size={height*0.03} color={colors.secondary} />
      </TouchableOpacity>
      <Text style={{color:colors.secondary,fontSize:height*0.024,fontWeight:'600'}}>My Pins</Text>
      <Pressable onPress={()=>{setShowEdit(!showEdit)}}>
        <Text style={{color:colors.zBlue,fontSize:height*0.018,}}>Edit</Text>
      </Pressable>
      
    </View>
  )
}



const RenderItem:FC<Render> = memo(({item,showEdit})=>{
  const {colors} = useAppSelector((state)=>state.cart.color.value);

  const sharedValue = useSharedValue(0);

  useEffect(()=>{
    // if(showEdit){
      sharedValue.value = withRepeat(withSequence(withTiming(100,{duration:100}), withTiming(-100,{duration:100}), withTiming(100,{duration:100}), withTiming(0,{duration:100})))
    // }
    // else{
      // sharedValue.value=0;
    // }
  },[]);  

  return(
    <Animated.View style={{width:width/3,alignItems:'center',height:height*0.15,transform:[{translateX:sharedValue.value}]}}>
      {item.imgUrl ? 
      <>
        <Image source={item.imgUrl} style={{height:height*0.08,width:height*0.08,borderRadius:height,}} />
       { showEdit&& 
       <View style={{height:height*0.018,width:height*0.018,position:'absolute',left:'60%',borderRadius:height,backgroundColor:colors.zBlack,borderWidth:1,}}>
          <Antd name='minuscircle' size={height*0.015} color={colors.zRed} />
        </View>}
      </>
      :
      <>
        <View style={{height:height*0.15,width:height*0.15,borderRadius:height,backgroundColor:colors.zBlue,}}>
          <Text style={{fontSize:height*0.025,color:colors.secondary}}>{[...item.name][0]}</Text>
        </View>
      </>
      }
    <Text style={{color:colors.secondary,fontSize:height*0.018,marginTop:height*0.02}}>{item.name}</Text>

    </Animated.View>
  )

})



const PinsIOS = ():JSX.Element => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);
  

  const {params:{data}} = useRoute<RouteProp<AppStackIOSParams,'PinsIOS'>>();
  const keyExtractor = (item:RenderProp):string => item.id;

  const renderItem:ListRenderItem<RenderProp> = ({item}) =>(<RenderItem showEdit={showEdit} item={item} />);
  const navigation = useNavigation<StackNavigationProp<AppStackIOSParams,'PinsIOS'>>();
  const [showEdit,setShowEdit] = useState<ShowType>(false);
  const ref = useRef();
  // const [handle,setHandle] = useState(true);

  // useEffect(()=>{
  //   console.log(handle)
  // },[handle]);


  return (
    // <PanGestureHandler  >
    <View  style={{backgroundColor:colors.zBlack,flex:1}}>
     
      <ListHeader setShowEdit={setShowEdit} showEdit={showEdit} />
        <FlatList scrollEnabled={false}    keyExtractor={keyExtractor} showsVerticalScrollIndicator={false} style={{marginTop:height*0.02,}}  data={data} renderItem={renderItem} numColumns={3} horizontal={false}    />
        {/* refreshControl={<RefreshControl progressViewOffset={1} tintColor={'transparent'} refreshing={false} onRefresh={()=>navigation.goBack()} />} */}
      <AddComponent routeName='hello' />

    </View>
    // </PanGestureHandler>
  )
}

export default PinsIOS