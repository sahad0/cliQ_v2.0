import React, { memo, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Organization from '../../pages/CommonPages/OrganisationControl/Organization';
import TabNavigators from './TabNavigatorsIOS';
import AppStackIOS from './AppStackIOS';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import {profileController,logoutController} from '../../store/store';
import axios from 'axios';


type ExistingUserStackParams = {
    Organization:undefined,
    AppStackIOS:undefined,
}

const ExistingUserNavIOS = ()=> {

  const Stack = createNativeStackNavigator<ExistingUserStackParams>();


  const {profile} = useAppSelector((state)=>state.cart.auth.value);
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    fetchProfile();
  },[]);

  const fetchProfile = async():Promise<void>=>{
    try {
      if(profile?._id===''){
        const {profile} = ((await axios('/auth/profile',{timeout:5000,method:'GET'})).data);
        dispatch(profileController({profile}));
      }
      
    } catch (error) {
      dispatch(logoutController());
      
    }
  }
  

  return (

      <Stack.Navigator  screenOptions={{headerShown:false,}} initialRouteName='AppStackIOS'>
        
        <Stack.Screen  options={{animation:'slide_from_right'}} name='AppStackIOS' component={AppStackIOS} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name='Organization' component={Organization} />
      
      </Stack.Navigator>
    )
  
}


export default ExistingUserNavIOS;