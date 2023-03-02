import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { Image } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../../Hooks/hooks'
import { logoutController } from '../../../store/store'
import { Fonts } from '../../../utils/Fonts'

type AppProps = {
    height:number,
    width:number,
}

const CreateOrgHeader:FC<AppProps> = ({height,width}):JSX.Element => {

  const dispatch = useAppDispatch();
  const {colors} = useAppSelector((state)=>state.cart.color.value);


  return (
    <View>
      <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:colors.primary}}>
        <View style={{flexDirection:'row',}}>
            <Image source={require('../../../assets/images/cliq-logo.png')} style={{marginLeft:height*0.02,height:height*0.07,width:width*0.07,alignSelf:'center'}} resizeMode={'contain'} />
            <Text style={{color:colors.secondary,fontFamily:Fonts.regular,marginTop:height*0.042,fontSize:height*0.02,marginLeft:width*0.02}}>Cliq</Text>
        </View>
        <TouchableOpacity onPress={()=>
          {setTimeout(()=>{
            dispatch(logoutController())
          },100)}}>
          <Text style={{fontFamily:Fonts.regular,margin:height*0.042,marginRight:height*0.01,fontSize:height*0.018,color:'gray'}}>SignOut</Text>
        </TouchableOpacity>
      </View>

      <View style={{height:0.2,backgroundColor:'lightgray',width:width,alignSelf:'center'}} />
    </View>
  )
}


export default CreateOrgHeader;