import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../Hooks/hooks';
import { useIsFocused } from '@react-navigation/native';
import { clearParticipantsController } from '../../../store/participantsStore';
import { height, width } from '../../../utils/Dimension';
import ChannelListAndroidMenuHeader from '../../../components/Android/ChannelListAndroidMenu/ChannelListAndroidMenuHeader';
import ChannelListAndroidMenuBody from '../../../components/Android/ChannelListAndroidMenu/ChannelListAndroidMenuBody';

const ChannelMenuAndroid = () => {
    const dispatch = useAppDispatch();
    const focused = useIsFocused();
    
    useEffect(()=>{
      if(focused){
        dispatch(clearParticipantsController());
  
      }
    },[focused]);
  
  
  
    return (
      <SafeAreaView style={{flex:1}}>
        <ChannelListAndroidMenuHeader height={height} width={width}/>
        <ChannelListAndroidMenuBody height={height} width={width} />
      </SafeAreaView>
    )
}

export default ChannelMenuAndroid