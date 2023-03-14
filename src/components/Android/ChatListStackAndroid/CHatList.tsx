import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'

const CHatList = () => {

    const navigation = useNavigation()

    useEffect(() => {
        navigation.dispatch(DrawerActions.openDrawer())
    },[])
  return (
    <View>
      <Text>CHatList</Text>
    </View>
  )
}

export default CHatList