import React, { useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import axios, { AxiosResponse } from 'axios';
import { useAppDispatch } from '../../Hooks/hooks';
import { logoutController } from '../../store/store';
import DrawerContent from '../../Extra/DrawerContent';
import AndroidStackNav from './AndroidStackNav';


export type DrawerStackParams ={
  AndroidStackNav:undefined,
  WidgetList:undefined,
  ChatList:undefined,
}

const Drawer = createDrawerNavigator<DrawerStackParams>();

const DrawerNavigators = ():JSX.Element => {




  return (
   
    <Drawer.Navigator useLegacyImplementation={false}   drawerContent={DrawerContent} screenOptions={{headerShown:false,drawerStyle:{width:'80%'}}}>
        
        <Drawer.Screen name="AndroidStackNav" component={AndroidStackNav} /> 


    </Drawer.Navigator> 
  )
}

export default DrawerNavigators;