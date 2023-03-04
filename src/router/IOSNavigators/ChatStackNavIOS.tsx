import React from 'react'
import Organization from '../../pages/CommonPages/OrganisationControl/Organization';
import TabNavigators from './TabNavigatorsIOS';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import ChatListIOS from '../../pages/IOS/ChatListStackIOS/ChatListIOS';
import Pins from '../../pages/IOS/ChatListStackIOS/Pins';


type ExistingUserStackParams = {
    ChatListIOS:undefined,
    Pins:undefined,
}

export default function ChatStackNavIOS() {

  const Stack = createStackNavigator<ExistingUserStackParams>(); 


  return (

      <Stack.Navigator  screenOptions={{headerShown:false,}} initialRouteName='ChatListIOS'>
        
        <Stack.Screen   name='ChatListIOS' component={ChatListIOS} />
        <Stack.Screen   name='Pins' options={{cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS}} component={Pins} />
      
      </Stack.Navigator>
    )
  
}