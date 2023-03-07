import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import CreateOrgHeader from '../../../components/CommonComp/CreateOrganization/CreateOrgHeader';
import OrganisationBody from '../../../components/CommonComp/Organizations/OrganisationBody';
import { useAppSelector } from '../../../Hooks/hooks';
import { height, width } from '../../../utils/Dimension';

export default function Organization():JSX.Element {

    
    const {colors} = useAppSelector((state)=>state.cart.color.value);



  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.primary}}>
        <CreateOrgHeader height={height} width={width} />
        <OrganisationBody height={height} width={width} />
    </SafeAreaView>
  )
}