import { NavigationContainer } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../Hooks/hooks';
import axios from 'axios';
import AuthNav from './Common/AuthNav';
import { Platform } from 'react-native';
import { useEffect, useLayoutEffect } from 'react';
import { colorController } from '../store/colorStore';
import NewUserStackNav from './Common/NewUserStackNav';
import ExistingUserNavAndroid from './AndroidNavigators/ExistingUserNavAndroid';
import ExistingUserNavIOS from './IOSNavigators/ExistingUserNavIOS';
import { logoutController } from '../store/store';






export default function Router():JSX.Element {


  
  const Component = ()=> Platform.select({
    android:<ExistingUserNavAndroid />,
    default:<ExistingUserNavIOS />,
  });
  

  const dispatch = useAppDispatch();

  const {token,orgNewUser} = useAppSelector((state)=>state.cart.auth.value);
  const auth = token;
  const newUser = orgNewUser;
  axios.defaults.headers.common['Authorization'] = `Bearer ${auth}`;
  const hello = useAppSelector((state)=>state.cart.auth.value);
  

  useEffect(()=>{
    console.log(hello)
  },[hello]);

  


  useEffect(()=>{
      if(Platform.OS === 'ios'){
        dispatch(colorController({OS:'IOS'}))
      }
      else{
        dispatch(colorController({OS:'ANDROID'}));
      }
  },[]);





  return (
    <NavigationContainer >
       {
        !auth && ( 
          <AuthNav />
         )
      }
      {
        auth && newUser && (
          <NewUserStackNav />
        )
      }
      {
        auth && !newUser &&(
          <Component />
        )
      } 
      

    

         
       
    </NavigationContainer>
  );
}
