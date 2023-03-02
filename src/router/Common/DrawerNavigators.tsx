import React, { useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from '../../Extra/DrawerContent';
import CreateChannelStackNav from './CreateChannelStackNav';
import axios, { AxiosResponse } from 'axios';
import { useAppDispatch } from '../../Hooks/hooks';
import { logoutController, profileController } from '../../store/store';


export type DrawerStackParams ={
  CreateChannelStackNav:undefined,
  WidgetList:undefined,
  ChatList:undefined,
}

const Drawer = createDrawerNavigator<DrawerStackParams>();

const DrawerNavigators = ():JSX.Element => {

  const dispatch = useAppDispatch();

  useEffect(()=>{
    fetchProfile();
  },[]);


  const fetchProfile = async():Promise<void>=>{
    try {
        const {profile} = (await (await axios('/auth/profile',{timeout:5000,method:'GET'})).data);
        dispatch(profileController({profile}));
    }catch(err){
        dispatch(logoutController());
    }
  }

  return (
   
    <Drawer.Navigator useLegacyImplementation={false}  drawerContent={DrawerContent} screenOptions={{headerShown:false,}}>
        
        <Drawer.Screen name="CreateChannelStackNav" component={CreateChannelStackNav} /> 

    </Drawer.Navigator> 
  )
}

export default DrawerNavigators;