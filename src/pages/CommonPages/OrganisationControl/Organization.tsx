import { View, Text, SafeAreaView, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { Dimensions } from 'react-native'
import CreateOrgHeader from '../../../components/CommonComp/CreateOrganization/CreateOrgHeader';
import OrganisationBody from '../../../components/CommonComp/Organizations/OrganisationBody';
import { useAppSelector } from '../../../Hooks/hooks';
import { height, width } from '../../../utils/Dimension';

export default function Organization():JSX.Element {

    
    const {colors} = useAppSelector((state)=>state.cart.color.value);

    useEffect(() => {
      const backAction = () => {
        BackHandler.exitApp();
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
  
      return () => backHandler.remove();
    }, []);
  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.primary}}>
        <CreateOrgHeader height={height} width={width} />
        <OrganisationBody height={height} width={width} />
    </SafeAreaView>
  )
}