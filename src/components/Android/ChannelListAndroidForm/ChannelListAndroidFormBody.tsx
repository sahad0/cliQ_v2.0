import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AndroidStackParams } from '../../../router/AndroidNavigators/AndroidStackNav';
import { useAppDispatch, useAppSelector } from '../../../Hooks/hooks';
import { filterParticipants, typeController, visibilityController } from '../../../store/participantsStore';
import Form1 from './Forms/Form1';
import { height, width } from '../../../utils/Dimension';
import Form2 from './Forms/Form2';
import Form3 from './Forms/Form3';
import { Selected } from '../../../pages/CommonPages/CreateChannelStack/AddParticipants';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'


type AppProps = {
    organizationId:string,
}


export type FocusState = {input1:boolean, input2:boolean};

export type TypeState = "PUBLIC" | "PRIVATE" ;

export type VisibilityState = boolean;


const ChannelListAndroidFormBody:FC<AppProps> = ({organizationId}):JSX.Element => {

    const [focus,setFocus] = useState<FocusState>({input1:false, input2:false});
    const [stateType,setStateType] = useState<TypeState>('PUBLIC');
    const [Visibility,setVisibility] = useState<VisibilityState>(true);
    const navigation = useNavigation<NativeStackNavigationProp<AndroidStackParams,'ChannelForm'>>();
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const {type,visibility,participants_list,} = useAppSelector((state)=>state.cart.channelParticipant.value);
    const dispatch = useAppDispatch();


    useEffect(()=>{
        setStateType(type);
        setVisibility(visibility);
    },[]);

    useEffect(()=>{
        dispatch(typeController({type:stateType}));
    },[stateType]);
    useEffect(()=>{
        dispatch(visibilityController({visibility:Visibility}));
    },[Visibility]);


  return (
    <ScrollView style={{flex:1,marginTop:height*0.08}}>
      
        <Form1  focus={focus} setFocus={setFocus} />
        <View style={{borderRadius:height*0.01,backgroundColor:'white',margin:height*0.02,elevation:3,marginTop:0,justifyContent:'center'}}>
            <Form2  stateType={stateType} setStateType={setStateType} />
        </View>

        {
        stateType==='PUBLIC' &&
            (
                <View style={{borderRadius:height*0.01,backgroundColor:'white',margin:height*0.02,elevation:3,marginTop:0,justifyContent:'center'}}>
                    <Form3 visibility={Visibility} setVisibility={setVisibility} />
                </View>
            )
        }

        <View style={{height:participants_list.length>0? height*0.18 : height*0.07,backgroundColor:'white',borderRadius:height*0.01,margin:height*0.02,elevation:2,marginTop:0}}>
        <TouchableOpacity  style={{margin:height*0.02,marginTop:0,marginBottom:0,height:height*0.07,flexDirection:'row',borderRadius:height*0.01,backgroundColor:'white',alignItems:'center',justifyContent:'space-between',}}>
        {/* onPress={()=>navigation.navigate('AddParticipants',{organization_id:organizationId})} */}
            <Text style={{color:'black',fontSize:height*0.017}}>Add Participants</Text>
            <Ionicons name='person-add' color={colors.zBlue} size={height*0.024}  />

        </TouchableOpacity>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{borderRadius:height*0.01,backgroundColor:'white'}}>
        
        {
         participants_list && participants_list.map((k:Selected,i:number)=>{
             
             return(
             
             <Pressable onPress={()=>dispatch(filterParticipants({id:k.id}))}  key={i} style={{alignItems:'center',justifyContent:'center',marginTop:height*0.035,margin:height*0.027,marginRight:0,marginLeft:width*0.035,marginBottom:height*0.05}}>
                 <View>
                     <Image source={require('../../../assets/images/profile.png')} style={{height:height*0.055,width:height*0.055,}} />
                     <View style={{top:height*0.035,borderColor:'white',borderWidth:1.5,left:height*0.039,height:height*0.018,width:height*0.018,borderRadius:height,backgroundColor:'lightgray',position:'absolute'}} >
                         <Text style={{fontSize:height*0.009,color:'white',alignSelf:'center'}}>x</Text>
                     </View>
                 </View>
                 <Text numberOfLines={1} ellipsizeMode='tail' style={{color:'black',alignSelf:'center'}}>{k.name}</Text>
             </Pressable>
         )})
        }
         
     </ScrollView>
    </View>
    
    <TouchableOpacity  style={{backgroundColor:colors.zBlue,margin:height*0.02,height:height*0.06,borderRadius:height*0.015,alignItems:'center',justifyContent:'center',marginTop:0}}>
        <Text style={{color:'white',fontSize:height*0.02}}>Create</Text>
    </TouchableOpacity>
  </ScrollView>
  )
}

export default ChannelListAndroidFormBody;