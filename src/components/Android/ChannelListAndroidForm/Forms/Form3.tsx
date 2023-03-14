import { View, Text, TouchableOpacity } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { height, width } from '../../../../utils/Dimension'
import { RadioButton } from 'react-native-paper'
import { VisibilityState } from '../ChannelListAndroidFormBody'
import { useAppSelector } from '../../../../Hooks/hooks'

type AppProps = {
  
    visibility: boolean,
    setVisibility : Dispatch<SetStateAction<VisibilityState>>
}

const Form3:FC<AppProps> = ({visibility,setVisibility}) => {

    const {colors} = useAppSelector((state)=>state.cart.color.value);

  return (
    <>
    <Text style={{color:'black',margin:height*0.02,fontSize:height*0.018,marginTop:height*0.02,marginBottom:height*0.015}}>Visibility</Text>

    <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',justifyContent:'space-between',margin:height*0.02,marginTop:height*0.002,marginBottom:0}} onPress={() => setVisibility(true)}  >
          <View>
            <Text style={{color:'black',fontSize:height*0.018}}>Open to all</Text>
            <Text style={{color:'gray',fontSize:height*0.015,width:width*0.65}}>Anyone in your organization can find & join</Text>
          </View>
          <View style={{alignSelf:'center'}}>
          <RadioButton value="true" color={colors.zBlue} uncheckedColor='gray' status={ visibility === true ? 'checked' : 'unchecked' } onPress={() => setVisibility(true)}/>
          </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',justifyContent:'space-between',margin:height*0.02,marginTop:height*0.02}} onPress={() => setVisibility(false)}>
          <View>
            <Text style={{color:'black',fontSize:height*0.018}}>Personal Channel</Text>
            <Text style={{color:'gray',fontSize:height*0.015,width:width*0.65}}>Organiszation members can view /join the channel only on invite.</Text>
          </View>
          <View style={{alignSelf:'center'}}>
          <RadioButton value="false" color={colors.zBlue} uncheckedColor='gray' status={ visibility === false ? 'checked' : 'unchecked' } onPress={() => setVisibility(false)}/>
          </View>
      </TouchableOpacity>
   </>
  )
}

export default Form3