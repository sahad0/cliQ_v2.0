import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import Material from  'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';
import {  launchImageLibrary , ImageLibraryOptions, Asset} from 'react-native-image-picker';
import { FocusState } from '../ChannelListAndroidFormBody';
import { useAppDispatch, useAppSelector } from '../../../../Hooks/hooks';
import { assetController, descriptionController, titleController } from '../../../../store/participantsStore';
import { height, width } from '../../../../utils/Dimension';

type AppProps = {
  
    focus:{
        input1: boolean,
        input2: boolean,
    },
    setFocus: Dispatch<SetStateAction<FocusState>>,
}

type ErrorCode = 'camera_unavailable' | 'permission' | 'others';




interface ImagePickerResponse {
    didCancel?: boolean,
    errorCode?: ErrorCode,
    errorMessage?: string,
    assets?:Asset[];
}

const Form1:FC<AppProps> = ({focus,setFocus}):JSX.Element => {
    const {name,description} = useAppSelector((state)=>state.cart.channelParticipant.value);
    const dispatch = useAppDispatch();
    const {assets} = useAppSelector((state)=>state.cart.channelParticipant.value);
    const {colors} = useAppSelector((state)=>state.cart.color.value);



    const pickImage = ()=>{
        let options:ImageLibraryOptions= {
            mediaType:'photo',
            selectionLimit:1,
            includeBase64:false,
        };
          
          /**
       * The first arg is the options object for customization (it can also be null or omitted for default options),
       * The second arg is the callback which sends object: response (more info in the API Reference)
       */
      launchImageLibrary(options, (response:ImagePickerResponse) => {
        
        
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorCode);
        } else {
      
        if(response.assets){
            dispatch(assetController({assets:response.assets[0]}));
            
        }
          
          
        }
      });
      
    }

    // data.append("image", {
        // uri: response.uri  ,
        // type: response.type,
        // name: response.fileName
    //   });

  return (
<View style={{backgroundColor:'white',borderColor:'gray',elevation:3,borderRadius:height*0.01,margin:height*0.02,alignItems:'center',justifyContent:'center'}}>

<View style={{margin:width*0.3,marginTop:width*0.035,marginBottom:width*0.06}}> 
 
 <View style={{flexDirection:'row',width:width*0.7}}>

   <View style={{width:'30%',margin:height*0.02,marginLeft:0,marginTop:0}}>
     <TouchableOpacity onPress={pickImage} style={{height:height*0.09,width:height*0.09,borderRadius:height,borderColor:'gray',elevation:3,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
     {
             assets && assets.uri  ? 
             <>
                 <Image source={{uri:assets.uri}} style={{height:height*0.11,width:height*0.11,borderRadius:height}}  resizeMode='cover' />
             </>
             :
             <>
             <Material  name='camera' size={height*0.035} color='lightgray' />
             </>
         }
     </TouchableOpacity>

   </View>
   <View style={{width:'70%',marginLeft:width*0.05}}>
       <Text style={{color:focus.input1?colors.zBlue:'gray',fontSize:height*0.016,width:'100%'}}>Title</Text>
       <TextInput value={name} onFocus={()=>setFocus({...focus,input1:true})} onBlur={(e)=>setFocus({...focus,input1:false})} onChangeText={(e)=>{dispatch(titleController({name:e}))}} style={{color:'black',height:height*0.042,width:'91%',borderBottomColor: focus.input1? colors.zBlue :'gray',borderBottomWidth:1,fontSize:height*0.018}} />
   </View>


 </View>

     <View style={{width:width*0.75,marginTop:width*0.005,}} >
       <Text style={{color:focus.input2?colors.zBlue:'gray',fontSize:height*0.016,}}>Description</Text>

       <TextInput value={description} onFocus={()=>setFocus({...focus,input2:true})} onBlur={()=>setFocus({...focus,input2:false})} onChangeText={(e)=>{dispatch(descriptionController({description:e}))}} style={{color:'black',height:height*0.042,borderBottomColor:focus.input2? colors.zBlue:'gray',width:'100%',borderBottomWidth:1,fontSize:height*0.018}} />

     </View>
   </View>
 </View>)
}



export default Form1