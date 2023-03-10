import { View, Text, TextInput, Pressable, Image, KeyboardAvoidingView, Platform, ImageSourcePropType, FlatList, ListRenderItem, RefreshControl } from 'react-native'
import React, { FC, memo, useState } from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import { StyleSheet } from 'react-native';
import { height, width } from '../../../utils/Dimension';
import { IosColors } from '../../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackIOSParams } from '../../../router/IOSNavigators/AppStackIOS';


type AppProps = {
    height:number,
    width:number,
}
type RenderType = {
    id:string,
    imgUrl:ImageSourcePropType,
    name:string,
    email:string,

}
type Render = {
    item:RenderType
}


const data:RenderType[] = [
    {
      id:'1',
      imgUrl:require('../../../assets/images/profPics/1.png'),
      name:'Liya',
      email:'liya@example.com'
    },
    {
      id:'2',
      imgUrl:require('../../../assets/images/profPics/2.png'),
      name:'Karen',
      email:'karen@example.com'
    },
    {
      id:'3',
      imgUrl:require('../../../assets/images/profPics/3.png'),
      name:'Tessa',
      email:'tessa@example.com'
    },
    {
      id:'4',
      imgUrl:require('../../../assets/images/profPics/4.png'),
      name:'ren',
      email:'ren@example.com'
    },
    {
      id:'5',
      imgUrl:require('../../../assets/images/profPics/5.png'),
      name:'Michel',
      email:'michel@example.com'
    },
    {
      id:'6',
      imgUrl:require('../../../assets/images/profPics/6.png'),
      name:'Dua',
      email:'duA@example.com'
    },
    {
      id:'7',
      imgUrl:require('../../../assets/images/profPics/7.png'),
      name:'Max',
      email:'maxx@example.com'
    },
  
  ];

  const HeaderComp = ():JSX.Element=>(
    <Text style={{fontSize:height*0.02,color:IosColors.colors.secondary,margin:height*0.03,marginBottom:height*0.01,fontWeight:'600'}}>Contacts</Text>
  )

const RenderItem:FC<Render> = memo(({item}):JSX.Element=>(
    <View style={styles.parent}> 
        <Image source={item.imgUrl} style={styles.imageStyle} /> 
        <View style={styles.holder}> 
            <Text style={styles.nameStyle}>{item.name}</Text> 
            <Text style={styles.emailStyle}>{item.email}</Text> 
        </View> 
    </View> 
))

const StartChatIOSList:FC<AppProps> = ({}) => {

    const renderItem:ListRenderItem<RenderType> = ({item})=> <RenderItem item={item} />
    const keyExtractor = (item:RenderType):string => item.id;
    const navigation = useNavigation<StackNavigationProp<AppStackIOSParams,'StartChat'>>();
    const [handle,setHandle] = useState(false);


    return (
            <FlatList onScroll={(e)=>{
              if(e.nativeEvent.contentOffset.y<0){
                setHandle(true);
              }
              else{
                setHandle(false);
              }
            }}
            onResponderTerminationRequest={_ => true}
            data={data} ListHeaderComponent={HeaderComp}  renderItem={renderItem} keyExtractor={keyExtractor}  />
        )
}


const styles= StyleSheet.create({
    parent:{
        flexDirection:'row',
        width:width*0.9,
        margin:height*0.03,
        marginTop:height*0.03,
        marginBottom:0,
        alignItems:'center',
    },
    imageStyle:{
        height:height*0.058,
        width:height*0.058,
        borderRadius:height
    },
    holder:{
        marginLeft:height*0.01
    },
    nameStyle:{
        width:width*0.7,
        fontSize:height*0.019,
        color:IosColors.colors.secondary,
        fontWeight:'600',
    },
    emailStyle:{
        marginTop:height*0.007,
        width:width*0.7,
        fontSize:height*0.018,
        color:IosColors.colors.zGray,
    }
})

export default StartChatIOSList;

