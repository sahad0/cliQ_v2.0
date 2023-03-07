import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import QuickChatHeader from '../../components/QuickChat/QuickChatHeader'
import QuickChatBody from '../../components/QuickChat/QuickChatBody';
import { height, width } from '../../../utils/Dimension';

export default function QuickChat():JSX.Element {



  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <QuickChatHeader height={height} width={width} />
      <QuickChatBody height={height} width={width} />
    </SafeAreaView>
  )
}