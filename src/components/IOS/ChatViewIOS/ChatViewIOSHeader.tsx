import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import Antd from 'react-native-vector-icons/AntDesign';
import { useAppSelector } from '../../../Hooks/hooks';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackIOSParams } from '../../../router/IOSNavigators/AppStackIOS';


type AppProps = {
    height:number,
    width:number,
    name:string,
}

const ChatViewIOSHeader:FC<AppProps> = ({height,width,name}):JSX.Element => {
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const navigation = useNavigation<StackNavigationProp<AppStackIOSParams,'ChatViewIOS'>>();

  return (
    <View style={{height:height*0.06,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.7,shadowRadius: 2,elevation: 2,backgroundColor:colors.primary}}>
        <View style={{flexDirection:'row',alignItems:'center',margin:height*0.02,marginTop:0}}>
            <Pressable onPress={()=>navigation.goBack()}>
                <Antd name='left' size={height*0.03} color={colors.secondary} />
            </Pressable>
            <Text style={{color:colors.secondary,fontSize:height*0.022,marginLeft:height*0.03}}>{name}</Text>
        </View>
    </View>
  )
}

export default ChatViewIOSHeader