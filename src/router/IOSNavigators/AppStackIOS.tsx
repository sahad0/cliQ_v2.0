import React, { useEffect } from 'react'
import { CardStyleInterpolators, createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import TabNavigatorsIOS from './TabNavigatorsIOS';
import { ImageSourcePropType, LogBox } from "react-native";
import PinsIOS from '../../pages/IOS/ChatListStackIOS/PinsIOS';
import StartChatIOS from '../../pages/IOS/ChatListStackIOS/StartChatIOS';
import ChatViewIOS from '../../pages/IOS/ChatListStackIOS/ChatViewIOS';
import Invite from '../../pages/IOS/ChatListStackIOS/Invite';


LogBox.ignoreLogs(["Sending `onAnimatedValueUpdate` with no listeners registered.",]);


export type AppStackIOSParams = {
    TabNavigatorsIOS:undefined,
    PinsIOS:{
      data : {id:string,imgUrl:ImageSourcePropType,name:string}[]
    },
    ChatViewIOS:{
      data:{
        id:string,
        name:string,
      }
    },
    StartChat:undefined,
    Invite:undefined,
}

export default function AppStackIOS() {

  const Stack = createStackNavigator<AppStackIOSParams>(); 



  return (

      <Stack.Navigator  screenOptions={{headerShown:false,animationEnabled:true,}} initialRouteName='TabNavigatorsIOS'>
        
        <Stack.Screen   name='TabNavigatorsIOS' component={TabNavigatorsIOS} />
        <Stack.Screen   name='PinsIOS' options={{animationEnabled:true,gestureEnabled:true,gestureDirection:'vertical',cardStyleInterpolator:CardStyleInterpolators.forModalPresentationIOS,detachPreviousScreen:false}} component={PinsIOS} />
        <Stack.Screen   name='StartChat' options={{animationEnabled:true,gestureEnabled:true,gestureDirection:'vertical',cardStyleInterpolator:CardStyleInterpolators.forModalPresentationIOS,detachPreviousScreen:false}} component={StartChatIOS} />
        <Stack.Screen   name='ChatViewIOS' options={{animationEnabled:true,gestureEnabled:true,gestureDirection:'horizontal',cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} component={ChatViewIOS} />
        <Stack.Screen   name='Invite'  options={{animationEnabled:true,gestureEnabled:true,gestureDirection:'vertical',cardStyleInterpolator:CardStyleInterpolators.forModalPresentationIOS,detachPreviousScreen:false}} component={Invite} />
      
      </Stack.Navigator>
    )
  
}