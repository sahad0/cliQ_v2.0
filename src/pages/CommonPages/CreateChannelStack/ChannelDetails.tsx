import { View, Text, SafeAreaView, Dimensions, StatusBar } from 'react-native'
import React from 'react'

export default function ChannelDetails():JSX.Element {

  const {width,height} = Dimensions.get('screen');

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#0b0b0b'}}>
        <StatusBar  barStyle={'default'} backgroundColor={'#5f5aad'} />

          {/* <ChatListHeader height={height} width={width} />
          <CreateChannelDetailIcon height={height} width={width} /> */}
    </SafeAreaView>
  )
}