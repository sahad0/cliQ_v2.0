import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Organization from '../../pages/CommonPages/OrganisationControl/Organization';
import TabNavigators from './TabNavigatorsIOS';
import AppStackIOS from './AppStackIOS';


type ExistingUserStackParams = {
    Organization:undefined,
    AppStackIOS:undefined,
}

export default function ExistingUserNavIOS() {

  const Stack = createNativeStackNavigator<ExistingUserStackParams>(); 


  return (

      <Stack.Navigator  screenOptions={{headerShown:false,}} initialRouteName='AppStackIOS'>
        
        <Stack.Screen  options={{animation:'slide_from_right'}} name='AppStackIOS' component={AppStackIOS} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name='Organization' component={Organization} />
      
      </Stack.Navigator>
    )
  
}