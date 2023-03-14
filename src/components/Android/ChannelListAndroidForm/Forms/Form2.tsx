import { View, Text, TouchableOpacity } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { height, width } from '../../../../utils/Dimension'
import { RadioButton } from 'react-native-paper'
import { TypeState } from '../ChannelListAndroidFormBody'
import { useAppSelector } from '../../../../Hooks/hooks'



type AppProps = {
    
    stateType: 'PUBLIC' | 'PRIVATE' ,
    setStateType: Dispatch<SetStateAction<TypeState>>
}

const Form2:FC<AppProps> = ({stateType,setStateType}) => {

    const {colors} = useAppSelector((state)=>state.cart.color.value);


  return (
    <>
    <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',justifyContent:'space-between',margin:height*0.02,marginTop:height*0.03,marginBottom:height*0.02}} onPress={() => setStateType('PUBLIC')} >
        <View>
          <Text style={{color:'black',fontSize:height*0.018}}>Organization Channel</Text>
          <Text style={{color:'gray',fontSize:height*0.015,width:width*0.65}}>Anyone in your organization can find & join</Text>
        </View>
        <View style={{alignSelf:'center'}}>
        <RadioButton value="PUBLIC" color={colors.zBlue} uncheckedColor={'gray'}    status={ stateType === 'PUBLIC' ? 'checked' : 'unchecked' } onPress={() => setStateType('PUBLIC')}/>
        </View>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',justifyContent:'space-between',margin:height*0.02,marginTop:0,marginBottom:height*0.035}} onPress={() => setStateType('PRIVATE')} >
        <View>
        <Text style={{color:'black',fontSize:height*0.018}}>Private Channel</Text>
          <Text style={{color:'gray',fontSize:height*0.015,width:width*0.65}}>Only people you invite can find & join.</Text>
        </View>
        <View style={{alignSelf:'center'}}>
        <RadioButton value="PRIVATE" color={colors.zBlue} uncheckedColor={'gray'} status={ stateType === 'PRIVATE' ? 'checked' : 'unchecked' } onPress={() => setStateType('PRIVATE')}/>
        </View>
    </TouchableOpacity>

  </>
  )
}

export default Form2