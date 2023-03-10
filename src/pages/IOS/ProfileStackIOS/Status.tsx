import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../Hooks/hooks';
import { height, width } from '../../../utils/Dimension';
import Antd from 'react-native-vector-icons/AntDesign';
import { ProfileStackParams } from '../../../router/IOSNavigators/ProfileStackIOS';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { statusController } from '../../../store/store';



const Status = () => {
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const navigation = useNavigation<StackNavigationProp<ProfileStackParams,'Status'>>();
    const dispatch = useAppDispatch();

  return (
    <View style={{backgroundColor:colors.zBlack,flex:1}}>
        <View style={{margin:height*0.04,flexDirection:'row'}}>
            <Pressable onPress={()=>navigation.goBack()}>
                <Antd  name='left' size={height*0.025} color={colors.secondary}  style={{marginRight:height*0.01}} />
            </Pressable>
            <Text style={{color:colors.secondary,fontSize:height*0.025,marginLeft:height*0.02}}>Status</Text>

        </View>

        <TouchableOpacity onPress={()=>dispatch(statusController({status:'AVAILABLE'}))} style={{flexDirection:'row',alignItems:'center',margin:width*0.15,marginTop:height*0.06,marginBottom:0}}>
            <View style={{height:height*0.015,width:height*0.015,backgroundColor:'green',borderRadius:height}} />
            <Text style={{color:colors.secondary,fontSize:height*0.02,marginLeft:height*0.01}}>{'AVAILABLE'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>dispatch(statusController({status:'BUSY'}))} style={{flexDirection:'row',alignItems:'center',margin:width*0.15,marginTop:height*0.06,marginBottom:0}}>
            <View style={{height:height*0.015,width:height*0.015,backgroundColor:'yellow',borderRadius:height}} />
            <Text style={{color:colors.secondary,fontSize:height*0.02,marginLeft:height*0.01}}>{'BUSY'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>dispatch(statusController({status:'AWAY'}))} style={{flexDirection:'row',alignItems:'center',margin:width*0.15,marginTop:height*0.06,marginBottom:0}}>
            <View style={{height:height*0.015,width:height*0.015,backgroundColor:'red',borderRadius:height}} />
            <Text style={{color:colors.secondary,fontSize:height*0.02,marginLeft:height*0.01}}>{'AWAY'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>dispatch(statusController({status:'INVISIBLE'}))} style={{flexDirection:'row',alignItems:'center',margin:width*0.15,marginTop:height*0.06,marginBottom:0}}>
            <View style={{height:height*0.015,width:height*0.015,backgroundColor:'gray',borderRadius:height}} />
            <Text style={{color:colors.secondary,fontSize:height*0.02,marginLeft:height*0.01}}>{'INVISIBLE'}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Status