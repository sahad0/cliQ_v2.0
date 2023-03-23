import React, { FC, memo, PureComponent, useReducer } from 'react'
import { ActivityIndicator, FlatList, ListRenderItem, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconi from 'react-native-vector-icons/SimpleLineIcons';
import { Fonts } from '../../../../utils/Fonts';
import { useAppDispatch, useAppSelector } from '../../../../Hooks/hooks';
import { height, width } from '../../../../utils/Dimension';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ExistingUserStackParams } from '../../../../router/AndroidNavigators/ExistingUserNavAndroid';
import axios from 'axios';
import requestStatus, { initial_state } from '../../../../utils/LoaderHandling';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface OrganisationType {
    id: string,
    name: string,
    isDefault:boolean,
    owner:object
}

type Props = {
    height: number,
    width: number,
}

type RenderProp = {
  item:OrganisationType,
  changeOrg : (_id:string)=>Promise<void>
}



  const RenderComp:FC<RenderProp> = memo(({item,changeOrg})=>{

    
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const arr = ['#BBE7FE','#D3B5E5','#FFD4DB','#EEB5EB'];


    
    return(
      <>
          <Pressable onPress={()=>changeOrg(item.id)} android_ripple={{color:'#D1FFBD',borderless:false,radius:height}}  style={{borderColor:'lightgray',borderWidth:0.5,marginBottom:height*0.012,height:height*0.08,width:width*0.9,justifyContent:'center',alignSelf:'center',borderRadius:10,}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Icon name='appstore1' size={height*0.03} style={{margin:height*0.013,marginLeft:width*0.05}} color={colors.secondary}/>
                    <Text style={{fontFamily:Fonts.regular,fontSize:height*0.02,color:colors.secondary,}}>{item.name}</Text>
                </View>
               
              
            </View>
        </Pressable>
      </>
    )
  })

  const RenderComp1:FC<RenderProp> = memo(({item,changeOrg})=>{

    
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    
    return(
      <>
          <TouchableOpacity onPress={()=>changeOrg(item.id)}  style={{marginBottom:height*0.012,height:height*0.08,width:width*0.9,borderColor:'white',elevation:0.3,justifyContent:'center',alignSelf:'center',borderRadius:10,}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name='appstore1' size={height*0.03} style={{margin:height*0.013,marginLeft:width*0.05}} color={colors.secondary}/>
                    <Text style={{fontFamily:Fonts.regular,fontSize:height*0.02,color:colors.secondary}}>{item.name}</Text>
                </View>
               
              
            </View>
        </TouchableOpacity>
      </>
    )
  })

  const HeaderComp = ()=>{
    
    return(
    
    <View style={{margin:height*0.03,flexDirection:'row',alignItems:'center'}}>
        <View style={{backgroundColor:'green',borderRadius:height*0.02,borderColor:'black',elevation:3}}>
        <Iconi name='organization' size={25} style={{margin:height*0.013,}} color={'#FFFFFF'}/>
        </View>
        <Text style={{fontFamily:Fonts.regular,fontSize:height*0.02,color:'green',marginLeft:width*0.03}}>Organizations</Text>
    </View>
  )}

  
  







  const OrgFlatlist:FC<Props>= ({height,width})=> {

    const {params:{organizations}} = useRoute<RouteProp<ExistingUserStackParams,'Organization'>>();
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NativeStackNavigationProp<ExistingUserStackParams,'Organization'>>();


    const changeOrg = async (_id:string)=>{
      try {
        setEventReducer({type:'loading'});
        const data = (await axios.post('/organization/set-default',{organization_id:_id})).data;
        navigation.navigate('Drawer');
      } catch (error) {
        setEventReducer({type:'error'});
      }
    }
    



    const keyExtractor = (item:OrganisationType):string => item.id;
    const renderItem:ListRenderItem<OrganisationType> = ({item})=> {
      if(Platform.OS==='ios'){
        return <RenderComp1 item={item} changeOrg={changeOrg} />
      }
      return <RenderComp item={item} changeOrg={changeOrg} />
    }
    
   



    const Layout = (data:OrganisationType[]| null | undefined, index:number) => (
      {length: height*0.08, offset: (height*0.08 * index)+height*0.012, index}
    )


  
      return (
        <>
        {/* Loader */}
        {eventReducer?.loading ?
        <View style={[StyleSheet.absoluteFillObject,{backgroundColor:colors.primary,zIndex:999999,alignItems:'center',justifyContent:'center'}]}>
            <Text style={{color:colors.secondary,fontSize:height*0.020}}>Redirecting </Text>
            <Text style={{color:colors.secondary,fontSize:height*0.021}}>Your workspace....</Text>
            <ActivityIndicator size={'large'} color={colors.zBlue} style={{marginTop:'10%'}} />
        </View>
        :
        <FlatList
          style={{zIndex:99}}
            showsVerticalScrollIndicator={false}
            getItemLayout={Layout}
            ListHeaderComponent={HeaderComp}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            data={organizations}
          />
        }
        
        </>
      );
  }

  export default OrgFlatlist;


 


