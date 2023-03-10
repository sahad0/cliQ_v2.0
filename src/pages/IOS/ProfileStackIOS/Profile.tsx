import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import ProfileHeader from '../../../components/IOS/ProfileStackIOS/Profile/ProfileHeader';
import { height, width } from '../../../utils/Dimension';


const Profile = ():JSX.Element => {
    const {colors} = useAppSelector((state)=>state.cart.color.value);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.zBlack}}>
        <ProfileHeader height={height} width={width} />
    </SafeAreaView>
  )
}

export default Profile