import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, Keyboard } from 'react-native'
import React from 'react'
import InviteHeader from '../../components/InviteToOrg/InviteHeader'
import InviteBody from '../../components/InviteToOrg/InviteBody';

export default function InviteToOrg() {

const {height,width} = Dimensions.get('screen');

  return (
    <SafeAreaView style={{flex:1}}>
      <TouchableOpacity onPress={()=>Keyboard.dismiss()} style={{flex:1}} activeOpacity={1}>
        <InviteHeader height={height} width={width} />
        <InviteBody height={height} width={width} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}