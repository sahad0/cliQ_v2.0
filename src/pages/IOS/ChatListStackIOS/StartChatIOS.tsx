import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import { useAppSelector } from '../../../Hooks/hooks';
import StartChatIOSHeader from '../../../components/IOS/StartChatIOS/StartChatIOSHeader';
import StartChatIOSBody from '../../../components/IOS/StartChatIOS/StartChatIOSBody';
import { height, width } from '../../../utils/Dimension';

const StartChatIOS = ():JSX.Element => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);
  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.zBlack}}>
      <StartChatIOSHeader height={height} width={width} />
      <StartChatIOSBody height={height} width={width} />

    </SafeAreaView>
  )
}

export default StartChatIOS