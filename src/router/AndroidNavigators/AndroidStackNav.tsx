import { View, Text, ImageSourcePropType } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigatorsAndroid from './TabNavigatorsAndroid';
import ChannelMenuAndroid from '../../pages/Android/ChannelListStackAndroid/ChannelMenuAndroid';
import ChannelFormAndroid from '../../pages/Android/ChannelListStackAndroid/ChannelFormAndroid';
import AddParticipants from '../../pages/Android/ChannelListStackAndroid/AddParticipantsAndroid';
import PinsIOS from '../../pages/IOS/ChatListStackIOS/PinsIOS';


export  type AndroidStackParams = {
  TabNavigators:undefined,
  ChannelMenu:undefined,
  ChannelForm:undefined,
  AddParticipants:{organization_id:string},
  Pins:{
    data : {id:string,imgUrl:ImageSourcePropType,name:string}[]
  },

  
}

const Stack = createNativeStackNavigator<AndroidStackParams>(); 


const AndroidStackNav = () => {
  return (
   <Stack.Navigator  screenOptions={{headerShown:false,}}  initialRouteName={'TabNavigators'} >

        <Stack.Screen  options={{animation:'fade_from_bottom'}} name='TabNavigators' component={TabNavigatorsAndroid} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name='ChannelMenu' component={ChannelMenuAndroid} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name='ChannelForm' component={ChannelFormAndroid} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name='AddParticipants' component={AddParticipants} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name='Pins' component={PinsIOS} />




    </Stack.Navigator>
  )
}

export default AndroidStackNav;