import { View, Text, Image, Pressable } from 'react-native'
import React, { FC } from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from '../../../Hooks/hooks';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackIOSParams } from '../../../router/IOSNavigators/AppStackIOS';

type AppProps = {
    height:number,
    width:number,
}

const ChatListIOSHeader:FC<AppProps> = ({height,width}):JSX.Element => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);
  const navigation = useNavigation<StackNavigationProp<AppStackIOSParams,'TabNavigatorsIOS'>>();

  return (
    <View style={{height:height*0.1,backgroundColor:colors.zBlack,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
        <Pressable onPress={()=>navigation.navigate('ProfileStackIOS')} style={{width:width*0.1,height:width*0.1,margin:height*0.018,marginTop:0,}}>
            <Image source={require('../../../assets/images/item.jpg')} style={{height:width*0.09,width:width*0.09,borderRadius:height,}} resizeMode={'cover'} />
            <View style={{height:height*0.012,width:height*0.012,backgroundColor:'#32D74B',position:'absolute',borderRadius:height,left:'65%',top:'58%',borderColor:colors.zBlack,borderWidth:1}} />
        </Pressable>
        <Text style={{fontSize:height*0.02,margin:height*0.03,marginTop:0,fontWeight:'600',color:colors.secondary,}}>Chats</Text>
        <IonIcons name='ios-search-outline' size={height*0.03} style={{margin:height*0.03,marginTop:0}} color={colors.secondary} />
    </View>
  )
}

export default ChatListIOSHeader