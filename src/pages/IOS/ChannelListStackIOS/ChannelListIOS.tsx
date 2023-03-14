import { View, Text, SafeAreaView, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import ChatListIOSHeader from '../../../components/IOS/ChatListIOS/ChatListIOSHeader';
import { height, width } from '../../../utils/Dimension';
import PersonalChannelList from '../../../components/IOS/ChannelListIOS/PersonalChannelList';
import { AndroidColors } from '../../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { AndroidStackParams } from '../../../router/AndroidNavigators/AndroidStackNav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const ChannelListIOS = ():JSX.Element => {

    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const navigationAndroid = useNavigation<NativeStackNavigationProp<AndroidStackParams,'TabNavigators'>>();

  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.zBlack}}>
      
      {Platform.OS==='ios' &&  <ChatListIOSHeader height={height} width={width} />}
      <PersonalChannelList height={height} width={width} />
      {Platform.OS==='ios' ? 
        <View  style={{backgroundColor:colors.zBlue,height:height*0.06,width:height*0.06,borderRadius:height,position:'absolute',alignItems:'center',justifyContent:'center',top:'96%',left:'80%'}}>
          <TouchableOpacity >
            <Text style={{color:colors.secondary,fontSize:height*0.024}}>#</Text>
          </TouchableOpacity>
        </View>
        :
        <TouchableOpacity  onPress={()=> navigationAndroid.navigate('ChannelMenu')}  style={{elevation:5,backgroundColor:AndroidColors.colors.zBlue,height:height*0.06,width:height*0.06,borderRadius:height,position:'absolute',alignItems:'center',justifyContent:'center',top:'88%',left:'80%'}}>
          <Text style={{color:colors.primary,fontSize:height*0.024}}>#</Text>
      </TouchableOpacity>
      }
    </SafeAreaView>
  )
}

export default ChannelListIOS;