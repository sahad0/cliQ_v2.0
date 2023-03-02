import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { FC, useReducer } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NewUserStackParams } from '../../../router/Common/NewUserStackNav';
import { Fonts } from '../../../utils/Fonts';
import { useAppSelector } from '../../../Hooks/hooks';

type AppProps = {
    height: number,
    width:number,
}


const CreateOrgFooter:FC<AppProps> = ({height,width}):JSX.Element => {

    const navigation = useNavigation<NativeStackNavigationProp<NewUserStackParams,'CreateOrganization'>>();
    const {colors} = useAppSelector((state)=>state.cart.color.value);


  return (
    <View style={{height:height*0.5,backgroundColor:colors.primary}}>
      
        <TouchableOpacity onPress={()=>navigation.navigate('NameOrganisation')}  style={{borderColor:'black',elevation:0.5,borderRadius:5,paddingHorizontal:height*0.1,backgroundColor:colors.primaryText,width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.1}}>
            <Text style={{color:'white',alignSelf:'center',fontFamily:Fonts.regular,}}>{"Create your own company!"}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CreateOrgFooter;