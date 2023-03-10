import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../pages/IOS/ProfileStackIOS/Profile';
import Status from '../../pages/IOS/ProfileStackIOS/Status';

export type ProfileStackParams = {
    Profile:undefined,
    Status:undefined,
}


const ProfileStackIOS = () => {
    const Stack = createNativeStackNavigator<ProfileStackParams>();



  

    return (
  
        <Stack.Navigator  screenOptions={{headerShown:false,}} initialRouteName='Profile'>
          
          <Stack.Screen   name='Profile' component={Profile} />
          <Stack.Screen  options={{animation:'slide_from_right'}} name='Status' component={Status} />
        
        </Stack.Navigator>
      )
}

export default ProfileStackIOS;