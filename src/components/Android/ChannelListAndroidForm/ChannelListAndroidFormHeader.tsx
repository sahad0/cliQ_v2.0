import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AndroidStackParams } from '../../../router/AndroidNavigators/AndroidStackNav';
import { useAppSelector } from '../../../Hooks/hooks';
import Antd from 'react-native-vector-icons/AntDesign'

type AppProps = {
    height:number,
    width:number,
}



const ChannelListAndroidFormHeader:FC<AppProps> = ({height,width}) => {
    const navigation = useNavigation<NativeStackNavigationProp<AndroidStackParams,'ChannelForm'>>();
    const {colors} = useAppSelector((state)=>state.cart.color.value);


  return (
    <View style={{position:'absolute',width:width,height:height*0.08,backgroundColor:colors.zBlue,flexDirection:'row',alignItems:'center'}}>
       <StatusBar  barStyle={'default'} backgroundColor={colors.zBlue} />
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Antd name='arrowleft' color={'white'} size={height*0.03}  style={{marginLeft:width*0.06}}/>
        </TouchableOpacity>
        
        <Text style={{color:'white',fontSize:height*0.023,marginLeft:width*0.07}}>Create a channel</Text>
    </View>
  )
}

export default ChannelListAndroidFormHeader