import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigatorsAndroid from './TabNavigatorsAndroid';


export  type ChannelStackParams = {
  TabNavigators:undefined,
  ChannelDetails:undefined,
  CreateChannelMenu:undefined,
  CreateChannelForm:undefined,
  AddParticipants:{organization_id:string},
  InviteToOrg:undefined,
  QuickChat:undefined,
  ChatList:undefined,

  
}

const Stack = createNativeStackNavigator<ChannelStackParams>(); 


const CreateChannelStackNav = () => {
  return (
   <Stack.Navigator  screenOptions={{headerShown:false,}}  initialRouteName={'TabNavigators'} >

        <Stack.Screen  options={{animation:'fade_from_bottom'}} name='TabNavigators' component={TabNavigatorsAndroid} />



    </Stack.Navigator>
  )
}

export default CreateChannelStackNav;