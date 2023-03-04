import React, { FC, memo, PureComponent } from 'react'
import { Dimensions, FlatList, ListRenderItem, Platform, Pressable, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconi from 'react-native-vector-icons/SimpleLineIcons';
import { Fonts } from '../../../../utils/Fonts';
import { useAppSelector } from '../../../../Hooks/hooks';

interface OrganisationType {
    id: string,
    name: string,
    isDefault:boolean,
    owner:object
}

type Props = {
    height: number,
    width: number,
    orgState:OrganisationType[],
}

type RenderProp = {
  item:OrganisationType,
}

type LayoutType = { length: number; offset: number; index: number; }

  const RenderComp:FC<RenderProp> = memo(({item})=>{

    const {height,width} = Dimensions.get('screen');
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    
    return(
      <>
          <Pressable android_ripple={{color:'lightgray',borderless:false,radius:height}}  style={{marginBottom:height*0.012,height:height*0.08,width:width*0.9,borderColor:'white',elevation:0.3,justifyContent:'center',alignSelf:'center',borderRadius:10,}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name='appstore1' size={height*0.03} style={{margin:height*0.013,marginLeft:width*0.05}} color={colors.secondary}/>
                    <Text style={{fontFamily:Fonts.regular,fontSize:height*0.02,color:colors.secondary}}>{item.name}</Text>
                </View>
               
              
            </View>
        </Pressable>
      </>
    )
  })

  const RenderComp1:FC<RenderProp> = memo(({item})=>{

    const {height,width} = Dimensions.get('screen');
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    
    return(
      <>
          <TouchableOpacity  style={{marginBottom:height*0.012,height:height*0.08,width:width*0.9,borderColor:'white',elevation:0.3,justifyContent:'center',alignSelf:'center',borderRadius:10,}}>
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

  
  const OrgFlatlist:FC<Props>= ({height,width,orgState})=> {

    const keyExtractor = (item:OrganisationType):string => item.id;
    const renderItem:ListRenderItem<OrganisationType> = ({item})=> {
      if(Platform.OS==='ios'){
        return <RenderComp1 item={item} />
      }
      return <RenderComp item={item} />
    }
    
   

    const HeaderComp = ()=>{
      const {colors} = useAppSelector((state)=>state.cart.color.value);
      
      return(
      
      <View style={{margin:height*0.04,flexDirection:'row',alignItems:'center'}}>
          <View style={{backgroundColor:'green',borderRadius:height*0.02,borderColor:'black',elevation:3}}>
          <Iconi name='organization' size={25} style={{margin:height*0.013,}} color={'#FFFFFF'}/>
          </View>
          <Text style={{fontFamily:Fonts.regular,fontSize:height*0.025,color:'green',marginLeft:width*0.03}}>Organizations</Text>
      </View>
    )}

    const Layout = (data:OrganisationType[]| null | undefined, index:number) => (
      {length: height*0.08, offset: (height*0.08 * index)+height*0.012, index}
    )


  
      return (
        <FlatList
          showsVerticalScrollIndicator={false}
          getItemLayout={Layout}
          ListHeaderComponent={HeaderComp}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={orgState}
        />
      );
  }

  export default OrgFlatlist;


 


