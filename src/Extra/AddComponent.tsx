import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import { useAppSelector } from '../Hooks/hooks';
import { height } from '../utils/Dimension';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackIOSParams } from '../router/IOSNavigators/AppStackIOS';

type AppProps = {
    routeName:string
}

const AddComponent:FC<AppProps> = ({routeName}) => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);

  const navigation = useNavigation<StackNavigationProp<AppStackIOSParams,'StartChat'>>();

  return (
    <Pressable  onPress={()=>navigation.navigate('Invite')} style={{backgroundColor:colors.zBlue,height:height*0.06,width:height*0.06,borderRadius:height,position:'absolute',alignItems:'center',justifyContent:'center',top:'87%',left:'80%'}}>
    <Material name='plus' size={height*0.028}  color={'white'} />

    </Pressable>
  )
}

export default AddComponent