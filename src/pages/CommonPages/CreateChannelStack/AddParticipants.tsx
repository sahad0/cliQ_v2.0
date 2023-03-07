import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AddParticipantsHeader from '../../components/CreateChannelStack/AddParticiapants/AddParticipantsHeader'
import AddParticipantsBody, { ItemProps } from '../../components/CreateChannelStack/AddParticiapants/AddParticiapantsBody';
import { clockRunning } from 'react-native-reanimated';
import axios from 'axios';
import { useNavigation,RouteProp, useRoute } from '@react-navigation/native';
import { ChannelStackParams } from '../../router/navigators/CreateChannelStackNav';
import { useAppSelector } from '../../Hooks/hooks';

export type Selected = {
  id: string,
  name: string,
}





export type SelectedState = Selected[]|[]; 

export default function AddParticipants():JSX.Element {


const [selected,setSelected] = useState<SelectedState>([]);
const [members,setMembers] = useState<ItemProps[]>([]);

const {params:{organization_id}} = useRoute<RouteProp<ChannelStackParams,'AddParticipants'>>();

const {profile} = useAppSelector((state)=>state.cart.auth.value);
const {participants_list} = useAppSelector((state)=>state.cart.channelParticipant.value);



useEffect(()=>{
  fetchMembers();
},[selected]);


const fetchMembers = async () => {
  try{
    if(organization_id && profile!==null){
      const {members} = (await axios('/organization/members',{method:'POST',timeout:5000,data:{organization_id:organization_id,excludeMembers:[profile._id]}})).data;
     console.log(members)
      setMembers(members);
      

    }

   
  }catch(err:any){  
    if(err){
      console.log(err.request.responseText);
    }

  }
}



return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <AddParticipantsHeader height={height} width={width} />
      <AddParticipantsBody height={height} width={width} data={members} selected={selected} setSelected={setSelected}  />
    </SafeAreaView>
  )
}