import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import CreateChannelMenuHeader from '../../components/CreateChannelStack/CreateChannelMenu/CreateChannelMenuHeader';
import CreateChannelMenuBody from '../../components/CreateChannelStack/CreateChannelMenu/CreateChannelMenuBody';
import { useAppDispatch } from '../../Hooks/hooks';
import { clearParticipantsController } from '../../store/participantsStore';
import { useIsFocused } from '@react-navigation/native';

export default function CreateChannelMenu():JSX.Element {

  const {width,height} = Dimensions.get('screen');
  const dispatch = useAppDispatch();
  const focused = useIsFocused();
  
  useEffect(()=>{
    if(focused){
      dispatch(clearParticipantsController());

    }
  },[focused]);



  return (
    <SafeAreaView style={{flex:1}}>
      <CreateChannelMenuHeader height={height} width={width} />
      <CreateChannelMenuBody height={height} width={width} />
    </SafeAreaView>
  )
}