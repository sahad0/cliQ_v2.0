import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigatorsAndroid from './TabNavigatorsAndroid';
import ChannelMenuAndroid from '../../pages/Android/ChannelListStackAndroid/ChannelMenuAndroid';
import ChannelFormAndroid from '../../pages/Android/ChannelListStackAndroid/ChannelFormAndroid';


export  type AndroidStackParams = {
  TabNavigators:undefined,
  ChannelMenu:undefined,
  ChannelForm:undefined,


  
}

const Stack = createNativeStackNavigator<AndroidStackParams>(); 


const AndroidStackNav = () => {
  return (
   <Stack.Navigator  screenOptions={{headerShown:false,}}  initialRouteName={'TabNavigators'} >

        <Stack.Screen  options={{animation:'fade_from_bottom'}} name='TabNavigators' component={TabNavigatorsAndroid} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name='ChannelMenu' component={ChannelMenuAndroid} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name='ChannelForm' component={ChannelFormAndroid} />


        



    </Stack.Navigator>
  )
}

export default AndroidStackNav;