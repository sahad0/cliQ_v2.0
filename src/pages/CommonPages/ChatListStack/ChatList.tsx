import { View, Text, Dimensions, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../Hooks/hooks';
import { logoutController } from '../../../store/store';

export default function ChatList():JSX.Element {

  const dispatch = useAppDispatch();
    
  useEffect(()=>{
    dispatch(logoutController());
  },[]);



  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#0b0b0b'}}>

        {/* <ChatListHeader height={height} width={width} />
        <ChatListBody height={height} width={width} /> */}

    </SafeAreaView>
  )
}