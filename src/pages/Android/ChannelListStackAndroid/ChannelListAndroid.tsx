import { View, Text, SafeAreaView } from 'react-native'
import React, { FC } from 'react'
import { StatusBar } from 'react-native'
import ChatListAndroidHeader from '../ChatListStackAndroid/ChatListAndroidHeader'
import { AndroidColors } from '../../../utils/Colors'
import ChannelListIOS from '../../IOS/ChannelListStackIOS/ChannelListIOS'

type AppProps = {

}


const ChannelListAndroid:FC<AppProps> = ():JSX.Element => {

    
    
    
      return (
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <StatusBar  barStyle={'dark-content'} backgroundColor={AndroidColors.colors.primary} />
    
              <ChatListAndroidHeader />
              <ChannelListIOS />
          
        </SafeAreaView>
      )
}

export default ChannelListAndroid