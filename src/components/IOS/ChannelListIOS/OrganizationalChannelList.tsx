import { View, Text, ListRenderItem, FlatList, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import React, { FC, memo } from 'react'
import { useAppSelector } from '../../../Hooks/hooks'
import { height } from '../../../utils/Dimension'
import Material from 'react-native-vector-icons/SimpleLineIcons';
import { AndroidColors, IosColors } from '../../../utils/Colors';



type AppProps = {
  height:number,
  width:number,
}
type RenderType = {
  id:string,
  name:string,
}
type Render={
  item:RenderType
}

const data=[
  {
      id:'1',
      name:'announcements'
  },
  {
      id:'2',
      name:'coimbatore-codesters-2022'
  },
  {
      id:'3',
      name:'Fresher Recruitment'
  },
  {
      id:'4',
      name:'interns 2022-23'
  },
  {
      id:'5',
      name:'Interns-node-react'
  },
  {
      id:'6',
      name:'react-native'
  },
  {
    id:'7',
    name:'interns 2022-23'
},
{
    id:'8',
    name:'Interns-node-react'
},
{
    id:'9',
    name:'react-native'
},

]

const HeaderComp = ()=>{
  const {colors} = useAppSelector((state)=>state.cart.color.value);

  return(
    <View style={{flexDirection:'row',alignItems:'center',marginTop:'4%'}}>
        <Material name='organization' color={colors.zBlue} size={height*0.024} />
        <Text style={{color:colors.zBlue,fontSize:height*0.018,marginLeft:height*0.01,fontWeight:'600'}}>Organization</Text>
    </View>
  )
}

const RenderItem:FC<Render> = memo(({item}):JSX.Element =>{
  const {colors} = useAppSelector((state)=>state.cart.color.value);

  return(
    <TouchableOpacity style={styles.listStyle}>
      <Text style={styles.hashStyle}>#</Text>
      <Text style={styles.textStyle}>{item.name}</Text>
  </TouchableOpacity>
  )})

const OrganizationalChannelList = () => {
  const renderItem:ListRenderItem<RenderType> = ({item})=><RenderItem item={item} />

    const keyExtractor = (item:RenderType):string=> item.id

  return (
    <FlatList ListHeaderComponent={HeaderComp} data={data} renderItem={renderItem} keyExtractor={keyExtractor} style={{flex:1,}} />
  )
}
const styles = StyleSheet.create({
  hashStyle: {color:IosColors.colors.zGray,fontSize:height*0.023,marginLeft:height*0.01},
  textStyle: {color: Platform.OS==='ios' ?IosColors.colors.secondary :AndroidColors.colors.secondary ,fontSize:Platform.OS==='ios'? height*0.020 : height*0.018,marginLeft:height*0.02,fontWeight:'500'},
  listStyle:{marginTop:height*0.02,flexDirection:'row',alignItems:'center'},
})

export default OrganizationalChannelList