import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import ChatIOS from '../../../components/IOS/ChatListIOS/ChatIOS';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackIOSParams } from '../../../router/IOSNavigators/AppStackIOS';
import { height, width } from '../../../utils/Dimension';







const ChatListIOS = () => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);

  const navigation = useNavigation<StackNavigationProp<AppStackIOSParams,'TabNavigatorsIOS'>>();





  

  return (
    <SafeAreaView style={{backgroundColor:colors.zBlack,flex:1}}>

      
      <ChatIOS height={height} width={width} />
      {Platform.OS==='ios' &&
          <View  style={{backgroundColor:colors.zBlue,height:height*0.06,width:height*0.06,borderRadius:height,position:'absolute',alignItems:'center',justifyContent:'center',top:'96%',left:'80%'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('StartChat')}>
            <Material name='square-edit-outline' size={height*0.028}  color={'white'} />
          </TouchableOpacity>
        </View>
       }


      

    </SafeAreaView>
  )
}

export default ChatListIOS;