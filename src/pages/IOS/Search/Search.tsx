import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import { height, width } from '../../../utils/Dimension';
import { TextInput } from 'react-native-paper';
import Ion from 'react-native-vector-icons/Ionicons';


const Search = () => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.zBlack}}>
       <View style={{height:height*0.05,backgroundColor:colors.zLgray,width:width*0.9,alignSelf:'center',borderRadius:height*0.01,marginTop:height*0.2}}>
          <View style={{flexDirection:'row',height:height*0.05,alignItems:'center',}}>
            <Ion name='ios-search' style={{margin:height*0.012}} size={height*0.025} color={colors.iconLight}  />
            <TextInput placeholder='Type name to search' placeholderTextColor={colors.placeholderColor} style={{width:width*0.7,height:height*0.05,fontSize:height*0.018,color:colors.secondary,backgroundColor:colors.zLgray}} />
          </View>
      </View>
    </SafeAreaView>
  )
}

export default Search