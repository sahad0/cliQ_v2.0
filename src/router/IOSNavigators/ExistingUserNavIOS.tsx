import React, { memo, useEffect, useLayoutEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Organization from '../../pages/CommonPages/OrganisationControl/Organization';
import TabNavigators from './TabNavigatorsIOS';
import AppStackIOS from './AppStackIOS';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import {logoutController} from '../../store/store';
import axios from 'axios';


type ExistingUserStackParams = {
    Organization:undefined,
    AppStackIOS:undefined,
}

const ExistingUserNavIOS = ()=> {

  const Stack = createNativeStackNavigator<ExistingUserStackParams>();



  

  return (

      <Stack.Navigator  screenOptions={{headerShown:false,}} initialRouteName='AppStackIOS'>
        
        <Stack.Screen  options={{animation:'slide_from_left'}} name='AppStackIOS' component={AppStackIOS} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name='Organization' component={Organization} />
      
      </Stack.Navigator>
    )
  
}


export default ExistingUserNavIOS;