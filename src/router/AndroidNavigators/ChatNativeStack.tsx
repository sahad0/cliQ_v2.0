import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatViewIOS from '../../pages/IOS/ChatListStackIOS/ChatViewIOS';
import { RouteProp, useRoute } from '@react-navigation/native';
import { AndroidStackParams } from './AndroidStackNav';


export type ChatNativeStackParams = {
    ChatView:{data:{id:string,name:string,}},

}

export default function ChatNativeStack() {

  const Stack = createNativeStackNavigator<ChatNativeStackParams>();
  
    const {params:{data:{id,name}}} = useRoute<RouteProp<AndroidStackParams,'Chat'>>();


  return (

      <Stack.Navigator  screenOptions={{headerShown:false,}} initialRouteName='ChatView'>
        
        <Stack.Screen  options={{animation:'slide_from_right'}} name='ChatView' initialParams={{data:{id:id,name:name}}} component={ChatViewIOS} />

      
      </Stack.Navigator>
    )
  
}