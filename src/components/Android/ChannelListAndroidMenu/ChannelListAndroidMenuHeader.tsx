

import { View, Text, StatusBar } from 'react-native'
import React, { FC } from 'react'
import Antd from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AndroidStackParams } from '../../../router/AndroidNavigators/AndroidStackNav'
import { useAppSelector } from '../../../Hooks/hooks'

type AppProps = {
    height: number,
    width: number,
}


const ChannelListAndroidMenuHeader:FC<AppProps> = ({height,width}) => {

    const navigation = useNavigation<NativeStackNavigationProp<AndroidStackParams,'TabNavigators'>>();
    const {colors} = useAppSelector((state)=>state.cart.color.value);

  return (
    <View style={{height:height*0.08,backgroundColor:colors.zBlue,width:width,alignItems:'center',flexDirection:'row'}}>
        <StatusBar  barStyle={'default'} backgroundColor={colors.zBlue} />
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Antd name='arrowleft' color={'white'} size={height*0.03}  style={{marginLeft:width*0.06}}/>
        </TouchableOpacity>
        
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:width*0.85}}>
          <Text style={{color:'white',fontSize:height*0.023,marginLeft:width*0.07}}>Channels</Text>
          <Antd name='search1' color={'white'} size={height*0.025} style={{marginRight:'5%'}}  />
        </View>
    </View>
  )
}

export default ChannelListAndroidMenuHeader;