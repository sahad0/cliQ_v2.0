import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import CreateChannelFormHeader from '../../components/CreateChannelStack/CreateChannelForm/CreateChannelFormHeader';
import CreateChannelFormBody from '../../components/CreateChannelStack/CreateChannelForm/CreateChannelFormBody';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Keyboard } from 'react-native';
import axios from 'axios';

export default function CreateChannelForm():JSX.Element {

  const {width,height} = Dimensions.get('screen');
  const [organizationId,setOrganizationId] = useState('');


  useEffect(()=>{
    fetchOrganizations();
  },[]);

  const fetchOrganizations = async ():Promise<void>=>{
    try{
      
      const {defaultOrg} = (await axios('/organization/default',{timeout: 5000,method: 'GET',})).data;
      setOrganizationId(defaultOrg);
    }catch(err){
        console.log(err);
    }
  }


  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <CreateChannelFormHeader height={height} width={width} />
        <CreateChannelFormBody height={height} width={width} organizationId={organizationId} />
    </SafeAreaView>
  )
}