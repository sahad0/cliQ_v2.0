import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Organization from '../../pages/CommonPages/OrganisationControl/Organization';
import DrawerNavigators from './DrawerNavigators';
import Test from '../../../Test';


export type ExistingUserStackParams = {
    Organization:{
      organizations:[{id: "95a63d7b-f290-4138-b0c0-8b0d6e74e614", isDefault: true, name: "Fif_Org", owner: [Object]}];
    },
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