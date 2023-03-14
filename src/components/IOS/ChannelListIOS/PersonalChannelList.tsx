import { View, Text, ListRenderItem, StyleSheet, Platform } from 'react-native'
import React, { FC } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useAppSelector } from '../../../Hooks/hooks'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { height } from '../../../utils/Dimension';
import OrganizationalChannelList from './OrganizationalChannelList';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackIOSParams } from '../../../router/IOSNavigators/AppStackIOS';
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

]

const HeaderComp = ()=>{
    const {colors} = useAppSelector((state)=>state.cart.color.value);

    return(
        <>
            <OrganizationalChannelList />
            <View style={{flexDirection:'row',alignItems:'center',marginTop:height*0.05}}>
                <Material name='radioactive-circle-outline' color={colors.zBlue} size={height*0.025}  />
                <Text style={{color:colors.zBlue,fontSize:height*0.018,marginLeft:height*0.01,fontWeight:'600'}}>Personal Channels</Text>
            </View>
        </>
    )
}

const RenderItem:FC<Render> = ({item}):JSX.Element =>{
    const {colors} = useAppSelector((state)=>state.cart.color.value);

    return(
        <TouchableOpacity style={{marginTop:height*0.02,flexDirection:'row',alignItems:'center'}}>
            <Text style={styles.hashStyle}>#</Text>
            <Text style={styles.textStyle}>{item.name}</Text>
        </TouchableOpacity>
    )}

const PersonalChannelList:FC<AppProps> = ({height,width}):JSX.Element => {

    const renderItem:ListRenderItem<RenderType> = ({item})=><RenderItem item={item} />

    const keyExtractor = (item:RenderType):string=> item.id;


  return (
    <FlatList  ListHeaderComponent={HeaderComp} data={data} renderItem={renderItem} keyExtractor={keyExtractor} style={{flex:1,margin:height*0.02,marginBottom:0,marginTop:height*0.01}} />
  )
}



const styles = StyleSheet.create({
    hashStyle: {color:IosColors.colors.zGray,fontSize:height*0.023,marginLeft:height*0.01},
    textStyle: {color: Platform.OS==='ios' ?IosColors.colors.secondary :AndroidColors.colors.secondary ,fontSize:Platform.OS==='ios'? height*0.020 : height*0.018,marginLeft:height*0.02,fontWeight:'500'}
})


export default PersonalChannelList