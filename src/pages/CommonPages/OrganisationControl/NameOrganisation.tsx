import { View, Text, Dimensions, TouchableOpacity, Keyboard, SafeAreaView } from 'react-native'
import React from 'react'
import CreateOrgHeader from '../../../components/CommonComp/CreateOrganization/CreateOrgHeader';
import NameOrgBody from '../../../components/CommonComp/NameOrganization/NameOrgBody';
import { useAppSelector } from '../../../Hooks/hooks';

export default function NameOrganisation():JSX.Element {

    const{height,width} = Dimensions.get('screen');
    const {colors} = useAppSelector((state)=>state.cart.color.value);


  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.primary}}>
      <TouchableOpacity activeOpacity={1} onPress={() =>Keyboard.dismiss()} >
        <CreateOrgHeader height={height} width={width} />
        <NameOrgBody height={height} width={width} />
        </TouchableOpacity>
    </SafeAreaView>
  )
}