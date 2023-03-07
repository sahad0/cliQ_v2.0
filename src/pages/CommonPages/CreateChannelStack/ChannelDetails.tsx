import { View, Text, SafeAreaView,  StatusBar } from 'react-native'
import React from 'react'

export default function ChannelDetails():JSX.Element {


  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#0b0b0b'}}>
        <StatusBar  barStyle={'default'} backgroundColor={'#5f5aad'} />

          {/* <ChatListHeader height={height} width={width} />
          <CreateChannelDetailIcon height={height} width={width} /> */}
    </SafeAreaView>
  )
}