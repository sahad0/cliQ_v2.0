import { View, Text, Dimensions, SafeAreaView } from 'react-native'
import React from 'react'

export default function ChatList():JSX.Element {

    const {height,width} = Dimensions.get('screen');



  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#0b0b0b'}}>

        {/* <ChatListHeader height={height} width={width} />
        <ChatListBody height={height} width={width} /> */}

    </SafeAreaView>
  )
}