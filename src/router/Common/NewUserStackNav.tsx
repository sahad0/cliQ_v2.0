import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateOrganization from '../../pages/CommonPages/OrganisationControl/CreateOrganization';
import NameOrganisation from '../../pages/CommonPages/OrganisationControl/NameOrganisation';


export type NewUserStackParams = {
    CreateOrganization:undefined,
    NameOrganisation:undefined,
}

export default function NewUserStackNav() {

  const Stack = createNativeStackNavigator<NewUserStackParams>(); 



  return (
    <Stack.Navigator  screenOptions={{headerShown:false,}}  initialRouteName={'CreateOrganization'} >
           
           <Stack.Screen  options={{animation:'slide_from_right'}} name='CreateOrganization' component={CreateOrganization} />
           <Stack.Screen  options={{animation:'slide_from_right'}} name='NameOrganisation' component={NameOrganisation} />

    </Stack.Navigator>
  )
}