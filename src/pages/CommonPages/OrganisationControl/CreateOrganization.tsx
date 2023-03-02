import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import CreateOrgHeader from '../../../components/CommonComp/CreateOrganization/CreateOrgHeader';
import CreateOrgBody from '../../../components/CommonComp/CreateOrganization/CreateOrgBody';
import CreateOrgFooter from '../../../components/CommonComp/CreateOrganization/CreateOrgFooter';
import { useAppSelector } from '../../../Hooks/hooks';

export default function CreateOrganization():JSX.Element {

    const {width, height} =Dimensions.get('screen');
    const {colors} = useAppSelector((state)=>state.cart.color.value);



  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.primary}}>
      
      <CreateOrgHeader height={height} width={width} />
      <CreateOrgBody height={height} width={width} />
      <CreateOrgFooter height={height} width={width} />

    </SafeAreaView>
  )


}