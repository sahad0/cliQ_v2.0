import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import QuickChatHeader from '../../components/QuickChat/QuickChatHeader'
import QuickChatBody from '../../components/QuickChat/QuickChatBody';

export default function QuickChat():JSX.Element {

const {height,width} = Dimensions.get('screen');

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <QuickChatHeader height={height} width={width} />
      <QuickChatBody height={height} width={width} />
    </SafeAreaView>
  )
}