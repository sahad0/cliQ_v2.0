import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { FC } from 'react'
import Antd from 'react-native-vector-icons/AntDesign';
import { useAppSelector } from '../../../Hooks/hooks';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackIOSParams } from '../../../router/IOSNavigators/AppStackIOS';
import { AndroidStackParams } from '../../../router/AndroidNavigators/AndroidStackNav';
import { Platform } from 'react-native';

type AppProps = {
    height:number,
    width:number,
}

const data = [
  {
    id:'1',
    imgUrl:require('../../../assets/images/profPics/1.png'),
    name:'Liya'
  },
  {
    id:'2',
    imgUrl:require('../../../assets/images/profPics/2.png'),
    name:'Karen'
  },
  {
    id:'3',
    imgUrl:require('../../../assets/images/profPics/3.png'),
    name:'Tessa'
  },
  {
    id:'4',
    imgUrl:require('../../../assets/images/profPics/4.png'),
    name:'Ren'
  },
  {
    id:'5',
    imgUrl:require('../../../assets/images/profPics/5.png'),
    name:'Michel'
  },
  {
    id:'6',
    imgUrl:require('../../../assets/images/profPics/6.png'),
    name:'Dua'
  },
  {
    id:'7',
    imgUrl:require('../../../assets/images/profPics/7.png'),
    name:'Max'
  },

]


const ChatListIOSPins:FC<AppProps> = ({height,width}):JSX.Element => {
  const {colors} = useAppSelector((state)=>state.cart.color.value);
  const navigation = useNavigation<StackNavigationProp<AppStackIOSParams,'TabNavigatorsIOS'>>();
  const navigation1 = useNavigation<StackNavigationProp<AndroidStackParams,'TabNavigators'>>();


  const openPins = ()=>{
    if(Platform.OS==='ios'){
      navigation.navigate('PinsIOS',{data:data});

    }
    else{
      navigation1.navigate('Pins',{data:data});
    }
  }

  return (
    <View style={{height:height*0.27,}}>

      <View style={{flexDirection:'row',justifyContent:'space-between',margin:height*0.018,marginTop:0,alignItems:'center'}}>
            <Text style={{color:colors.secondary,fontSize:height*0.02,fontWeight:'600'}}>My Pins</Text>
            <TouchableOpacity onPress={openPins}>
              <Antd name='right' size={height*0.015} color={colors.zGray} />
            </TouchableOpacity>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal >
        
        {
          data.map((k)=>(
              <View key={k.id} style={{height:height*0.09,width:height*0.09,margin:height*0.01}}>
                <View style={{backgroundColor:colors.zBlue,height:height*0.09,width:height*0.09,borderRadius:height,}}>
                  <Image source={k.imgUrl} style={{borderRadius:height,height:'100%',width:'100%'}} resizeMode='cover' />
                </View>
                <Text numberOfLines={1} ellipsizeMode={'tail'} style={{fontSize:height*0.018,marginTop:height*0.01,color:colors.zGray,alignSelf:'center'}}>{k.name}</Text>
            </View>
          ))
        }
      
      </ScrollView>

      <Text style={{fontSize:height*0.018,margin:height*0.03,marginLeft:height*0.020,marginTop:0,fontWeight:'600',color:colors.secondary,}}>Chats</Text>


    </View>
  )
}

export default ChatListIOSPins