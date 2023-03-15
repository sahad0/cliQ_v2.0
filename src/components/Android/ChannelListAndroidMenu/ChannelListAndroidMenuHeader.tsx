

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

        <View style={{flexDirection:'row',justifyContent:'space-between',width:width,}}>

            <View style={{flexDirection:'row',marginLeft:'5%'}}>
              <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginLeft:'10%'}}>
                  <Antd name='arrowleft' color={'white'} size={height*0.03}  />
              </TouchableOpacity>
          
              <Text style={{color:'white',fontSize:height*0.023,marginLeft:'5%'}}>Channels</Text>
            </View>

            <View style={{marginRight:'5%'}}>
              <Antd name='search1' color={'white'} size={height*0.025}   />
            </View>
            
        </View>

    </View>
  )
}

export default ChannelListAndroidMenuHeader;