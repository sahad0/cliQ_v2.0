import { View, Text } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import axios from 'axios';
import { Fonts } from '../../../utils/Fonts';
import { useAppSelector } from '../../../Hooks/hooks';

type AppProps = {
    height: number,
    width:number,
}


const CreateOrgBody:FC<AppProps> = ({height,width}):JSX.Element => {

    const [name,setName] = useState('');
    const {colors} = useAppSelector((state)=>state.cart.color.value);


    useEffect(()=>{
        userProfile();
    },[]);

  const userProfile = async():Promise<void> => {
    try {
       const user = await axios.get('/auth/profile');
       if(user){
            const {first_name} = user.data.profile;
            setName(first_name);
       }
      
    } catch (err:any) {
        setName('');
    }

  }
  return (
    <View style={{height:height*0.5,backgroundColor:colors.primary}}>
        <View style={{marginTop:height*0.3}}>
      <Text style={{color:colors.secondary,fontFamily:Fonts.regular,fontSize:height*0.03,marginLeft:width*0.03,marginBottom:0}}>Hey</Text>

      <Text style={{color:colors.secondary,fontFamily:Fonts.regular,fontSize:height*0.04,marginTop:height*0.015,marginLeft:width*0.03,marginBottom:0}}>{name}</Text>

      <View style={{flexDirection:'row',marginLeft:width*0.03,marginBottom:0}}>
        <Text style={{color:'#24a0ed',fontFamily:Fonts.regular,fontSize:height*0.02}}>Let's get you started !</Text>
        <View style={{height:1,marginLeft:width*0.1,backgroundColor:'lightgray',width:width,alignSelf:'center'}} />
      </View>
      </View>
    </View>
  )
}

export default CreateOrgBody;