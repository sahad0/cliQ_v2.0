import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AndroidStackParams } from '../../../router/AndroidNavigators/AndroidStackNav';
import { height, width } from '../../../utils/Dimension';
import { StatusBar } from 'react-native';
import Antd from 'react-native-vector-icons/AntDesign';
import { useAppSelector } from '../../../Hooks/hooks';

const AddParticipantsAndroidHeader = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AndroidStackParams,'AddParticipants'>>();
    const {colors} = useAppSelector((state)=>state.cart.color.value);

    return (
        <View style={{height:height*0.08,backgroundColor:colors.primary,width:width,alignItems:'center',flexDirection:'row',elevation:1}}>
        <StatusBar  barStyle={'dark-content'} backgroundColor={colors.primary} />

        <View style={{flexDirection:'row',justifyContent:'space-between',width:width,}}>

            <View style={{flexDirection:'row',}}>
              <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginLeft:'10%'}}>
                  <Antd name='arrowleft' color={colors.secondary} size={height*0.03}  />
              </TouchableOpacity>
          
              <Text style={{color:colors.secondary,fontSize:height*0.023,marginLeft:'10%'}}>AddParticipants</Text>
            </View>

            <View style={{marginRight:'5%',marginBottom:'5%'}}>
              <Antd name='search1' color={colors.secondary} size={height*0.025}   />
            </View>
            
        </View>

    </View>
    )
}

export default AddParticipantsAndroidHeader