import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import InviteHeader from '../../../components/IOS/Invite/InviteHeader'
import { height, width } from '../../../utils/Dimension'
import { useAppSelector } from '../../../Hooks/hooks'
import InviteBody from '../../../components/IOS/Invite/InviteBody'

const Invite = ():JSX.Element => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.zBlack}}>
        <InviteHeader height={height} width={width} />
        <InviteBody height={height} width={width} />
    </SafeAreaView>
  )
}

export default Invite