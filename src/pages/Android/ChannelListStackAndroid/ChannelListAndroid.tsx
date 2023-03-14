import { View, Text, SafeAreaView } from 'react-native'
import React, { FC } from 'react'
import { StatusBar } from 'react-native'
import ChatListAndroidHeader from '../ChatListStackAndroid/ChatListAndroidHeader'
import { AndroidColors } from '../../../utils/Colors'
import ChannelListIOS from '../../IOS/ChannelListStackIOS/ChannelListIOS'

type AppProps = {

}


const ChannelListAndroid:FC<AppProps> = ():JSX.Element => {
    const data = [
        {
          id:'1',
          imgUrl :require('../../../assets/images/player/p6.png'),
          name:'#Astro_CLub',
          memberCount:20,
        },
        {
          id:'2',
          imgUrl :require('../../../assets/images/player/p6.png'),
          name:'#Astro_CLub',
          memberCount:20,
        },
        {
          id:'3',
          imgUrl :require('../../../assets/images/player/p7.png'),
          name:'#Astro_CLub',
          memberCount:20,
        },
        {
          id:'4',
          imgUrl :require('../../../assets/images/player/p8.png'),
          name:'#Astro_CLub',
          memberCount:20,
        },
        {
          id:'5',
          imgUrl :require('../../../assets/images/player/p9.png'),
          name:'#Astro_CLub',
          memberCount:20,
        }
      ]
    
    
    
      return (
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <StatusBar  barStyle={'dark-content'} backgroundColor={AndroidColors.colors.primary} />
    
              <ChatListAndroidHeader />
              <ChannelListIOS />
              {/* <CreateChannelDetailsBody height={height} width={width} data={data} />
    
              <CreateChannelDetailIcon height={height} width={width}  /> */}
        </SafeAreaView>
      )
}

export default ChannelListAndroid