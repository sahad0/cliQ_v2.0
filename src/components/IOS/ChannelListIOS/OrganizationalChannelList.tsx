import { View, Text, ListRenderItem, FlatList, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { useAppSelector } from '../../../Hooks/hooks'
import { height } from '../../../utils/Dimension'
import Material from 'react-native-vector-icons/SimpleLineIcons';



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

]

const HeaderComp = ()=>{
  const {colors} = useAppSelector((state)=>state.cart.color.value);

  return(
    <View style={{flexDirection:'row',alignItems:'center'}}>
        <Material name='organization' color={colors.zBlue} size={height*0.03} />
        <Text style={{color:colors.zBlue,fontSize:height*0.020,marginLeft:height*0.01}}>Personal Channels</Text>
    </View>
  )
}

const RenderItem:FC<Render> = ({item}):JSX.Element =>{
  const {colors} = useAppSelector((state)=>state.cart.color.value);

  return(
    <TouchableOpacity style={{marginTop:height*0.02,flexDirection:'row',alignItems:'center'}}>
      <Text style={{color:colors.zGray,fontSize:height*0.023,marginLeft:height*0.01}}>#</Text>
      <Text style={{color:colors.secondary,fontSize:height*0.020,marginLeft:height*0.02,fontWeight:'600'}}>{item.name}</Text>
  </TouchableOpacity>
  )}

const OrganizationalChannelList = () => {
  const renderItem:ListRenderItem<RenderType> = ({item})=><RenderItem item={item} />

    const keyExtractor = (item:RenderType):string=> item.id

  return (
    <FlatList ListHeaderComponent={HeaderComp} data={data} renderItem={renderItem} keyExtractor={keyExtractor} style={{flex:1,}} />
  )
}

export default OrganizationalChannelList