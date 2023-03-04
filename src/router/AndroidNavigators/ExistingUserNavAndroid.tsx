import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Organization from '../../pages/CommonPages/OrganisationControl/Organization';
import DrawerNavigators from './DrawerNavigators';


type ExistingUserStackParams = {
    Organization:undefined,
    Drawer:undefined,
}

export default function ExistingUserNavAndroid() {

  const Stack = createNativeStackNavigator<ExistingUserStackParams>(); 


  return (

      <Stack.Navigator  screenOptions={{headerShown:false,}} initialRouteName='Drawer'>
        
        <Stack.Screen  options={{animation:'slide_from_right'}} name='Drawer' component={DrawerNavigators} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name='Organization' component={Organization} />
      
      </Stack.Navigator>
    )
  
}