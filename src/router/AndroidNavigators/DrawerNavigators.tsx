import React, { useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CreateChannelStackNav from './AndroidStackNav';
import axios, { AxiosResponse } from 'axios';
import { useAppDispatch } from '../../Hooks/hooks';
import { logoutController } from '../../store/store';
import DrawerContent from '../../Extra/DrawerContent';
import { width } from '../../utils/Metrics';


export type DrawerStackParams ={
  CreateChannelStackNav:undefined,
  WidgetList:undefined,
  ChatList:undefined,
}

const Drawer = createDrawerNavigator<DrawerStackParams>();

const DrawerNavigators = ():JSX.Element => {




  return (
   
    <Drawer.Navigator useLegacyImplementation={false}   drawerContent={DrawerContent} screenOptions={{headerShown:false,drawerStyle:{width:width(295)}}}>
        
        <Drawer.Screen name="CreateChannelStackNav" component={CreateChannelStackNav} /> 


    </Drawer.Navigator> 
  )
}

export default DrawerNavigators;