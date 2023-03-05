import React from 'react'
import Organization from '../../pages/CommonPages/OrganisationControl/Organization';
import TabNavigators from './TabNavigatorsIOS';
import { CardStyleInterpolators, createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import ChatListIOS from '../../pages/IOS/ChatListStackIOS/ChatListIOS';
import Pins from '../../pages/IOS/ChatListStackIOS/Pins';
import TabNavigatorsIOS from './TabNavigatorsIOS';import { ImageSourcePropType, LogBox } from "react-native";

LogBox.ignoreLogs(["Sending `onAnimatedValueUpdate` with no listeners registered.",]);


export type AppStackIOSParams = {
    TabNavigatorsIOS:undefined,
    Pins:{
      data : {id:string,imgUrl:ImageSourcePropType,name:string}[]
    },
}

export default function AppStackIOS() {

  const Stack = createStackNavigator<AppStackIOSParams>(); 


  return (

      <Stack.Navigator  screenOptions={{headerShown:false,animationEnabled:true,}} initialRouteName='TabNavigatorsIOS'>
        
        <Stack.Screen   name='TabNavigatorsIOS' component={TabNavigatorsIOS} />
        <Stack.Screen   name='Pins' options={{animationEnabled:true,gestureEnabled:true,gestureDirection:'vertical',cardStyleInterpolator:CardStyleInterpolators.forModalPresentationIOS,detachPreviousScreen:false}} component={Pins} />
      
      </Stack.Navigator>
    )
  
}