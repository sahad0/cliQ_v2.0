import { NavigationContainer } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../Hooks/hooks';
import axios from 'axios';
import AuthNav from './Common/AuthNav';
import { Platform, SafeAreaView } from 'react-native';
import { useEffect } from 'react';
import { colorController } from '../store/colorStore';
import NewUserStackNav from './Common/NewUserStackNav';
import ExistingUserNav from './Common/ExistingUserNav';




export default function Router():JSX.Element {

  const dispatch = useAppDispatch();

  const {token,orgNewUser} = useAppSelector((state)=>state.cart.auth.value);
  const auth = token;
  const newUser = orgNewUser;
  axios.defaults.headers.common['Authorization'] = `Bearer ${auth}`;

  console.log(orgNewUser);

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
          <ExistingUserNav />
        )
      } 
      

         
       
    </NavigationContainer>
  );
}
