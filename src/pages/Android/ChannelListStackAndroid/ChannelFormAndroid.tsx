import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ChannelListAndroidFormHeader from '../../../components/Android/ChannelListAndroidForm/ChannelListAndroidFormHeader';
import { height, width } from '../../../utils/Dimension';
import ChannelListAndroidFormBody from '../../../components/Android/ChannelListAndroidForm/ChannelListAndroidFormBody';

const ChannelFormAndroid = ():JSX.Element => {
    const [organizationId,setOrganizationId] = useState('');



    useEffect(()=>{
      fetchOrganizations();
    },[]);
  
    const fetchOrganizations = async ():Promise<void>=>{
      try{
        
        const {defaultOrg} = (await axios('/organization/default',{timeout: 5000,method: 'GET',})).data;
        setOrganizationId(defaultOrg);
      }catch(err){
      }
    }
  
  
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
         <ChannelListAndroidFormHeader height={height} width={width} />
         <ChannelListAndroidFormBody organizationId={organizationId} />
      </SafeAreaView>
    )
}

export default ChannelFormAndroid