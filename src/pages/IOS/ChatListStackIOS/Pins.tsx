import { View, Text, SafeAreaView, Dimensions, ImageSourcePropType, ListRenderItem, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { FC, memo } from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { AppStackIOSParams } from '../../../router/IOSNavigators/AppStackIOS';
import Ion from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'


type RenderProp = {
  id:string,
  imgUrl ?:ImageSourcePropType,
  name:string
}
type Render = {
  item :RenderProp
}

const ListHeader = ():JSX.Element =>{
  const {colors} = useAppSelector((state)=>state.cart.color.value);
  const {height,width} = Dimensions.get('screen');
  const navigation = useNavigation<StackNavigationProp<AppStackIOSParams,'Pins'>>();
  return(
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:height*0.04,}}>
      <Text style={{color:colors.secondary,fontSize:height*0.024,fontWeight:'600'}}>Pins</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ion name='ios-close' size={height*0.02} color={colors.secondary} />
      </TouchableOpacity>
    </View>
  )
}



const RenderItem:FC<Render> = memo(({item})=>{
  const {colors} = useAppSelector((state)=>state.cart.color.value);
  const {height,width} = Dimensions.get('screen');

  return(
    <View style={{width:width/2,alignItems:'center',height:height*0.22}}>
      {item.imgUrl ? 
      <>
        <Image source={item.imgUrl} style={{height:height*0.15,width:height*0.15,borderRadius:height,}} />
      </>
      :
      <>
        <View style={{height:height*0.15,width:height*0.15,borderRadius:height,backgroundColor:colors.zBlue,}}>
          <Text style={{fontSize:height*0.025,color:colors.secondary}}>{[...item.name][0]}</Text>
        </View>
      </>
      }
    <Text style={{color:colors.secondary,fontSize:height*0.018,marginTop:height*0.02}}>{item.name}</Text>

    </View>
  )

})



const Pins = ():JSX.Element => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);
  const {height,width} = Dimensions.get('screen');

  const {params:{data}} = useRoute<RouteProp<AppStackIOSParams,'Pins'>>();
  const keyExtractor = (item:RenderProp):string => item.id;

  const renderItem:ListRenderItem<RenderProp> = ({item}) =>(<RenderItem item={item} />);




  return (
    <View style={{backgroundColor:colors.zBlack,flex:1}}>
     


      <FlatList  ListHeaderComponent={ListHeader} keyExtractor={keyExtractor} showsVerticalScrollIndicator={false} style={{marginTop:height*0.02}}  data={data} renderItem={renderItem} numColumns={2}    />
      <View  style={{backgroundColor:colors.zBlue,height:height*0.06,width:height*0.06,borderRadius:height,position:'absolute',alignItems:'center',justifyContent:'center',top:'87%',left:'80%'}}>
      <Material name='plus' size={height*0.028}  color={'white'} />

      </View>

    </View>
  )
}

export default Pins