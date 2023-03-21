import { View, Text, Image, ListRenderItem, ImageSourcePropType, FlatList, Pressable, Platform } from 'react-native'
import React, { FC, memo } from 'react'
import { useAppDispatch, useAppSelector } from '../../../Hooks/hooks';
import ChatListIOSHeader from './ChatListIOSHeader';
import ChatListIOSPins from './ChatListIOSPins';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackIOSParams } from '../../../router/IOSNavigators/AppStackIOS';
import { height, width } from '../../../utils/Dimension';
import ChatListAndroidHeader from '../../../pages/Android/ChatListStackAndroid/ChatListAndroidHeader';
import { StyleSheet } from 'react-native';
import { AndroidColors, IosColors } from '../../../utils/Colors';
import { AndroidStackParams } from '../../../router/AndroidNavigators/AndroidStackNav';
import { chatIdController } from '../../../store/messageStore';

type AppProps = {
    height:number,
    width:number,
}
type RenderProp = {
    id:string,
    imgUrl ?: ImageSourcePropType,
    name:string,
    recentMsg:string,
    timestamp : string
}

type Render = {
    item:RenderProp,
}





    const ListHeaderComp = ():JSX.Element =>{

        return(
            <>
                <ChatListIOSPins height={height} width={width} />
            </>
    )}

    const RenderItem:FC<Render> = memo(({item})=>{

        

        const {colors} = useAppSelector((state)=>state.cart.color.value);
        const {profile} = useAppSelector((state)=>state.cart.auth.value);
       
        const dispatch = useAppDispatch();
        const navigation = useNavigation<StackNavigationProp<AppStackIOSParams,'TabNavigatorsIOS'>>();
        const navigation1 = useNavigation<StackNavigationProp<AndroidStackParams,'TabNavigators'>>();

        const redirectChat = (id:string,name:string):void=>{
            if(Platform.OS==='ios'){
                navigation.navigate('ChatViewIOS',{data:{id:id,name:name}});
            }
            else{
                navigation1.navigate('Chat',{data:{id:id,name:name}});

            }
        }



        return(
        <>
            <Pressable onPress={()=>{dispatch(chatIdController(item.id)),redirectChat(item.id,item.name)}} style={Platform.OS==='ios'?styles.iosListStyle:styles.androidListStyle}>
                <View style={{width:'15%',}}>
                    {
                        item.imgUrl ? 
                        <>
                            <Image source={item.imgUrl} style={Platform.OS==='ios'?styles.iosImg:styles.androidImg} />
                        </>
                        :
                        <>
                            <View style={styles.altImg}>
                                <Text style={styles.altText}>{[...item.name][0]}</Text>
                            </View>
                        </>
                    }
                </View>
                <View style={styles.cntHolder}>
                    <View style={styles.cntAligner}>
                        <Text style={Platform.OS==='ios'? styles.nameStyleIOS : styles.nameStyleAndroid}>{item.name}</Text>
                        <Text  style={{color:colors.zGray,fontSize:height*0.014}}>{item.timestamp}</Text>
                    </View>
                    <Text style={Platform.OS==='ios'?styles.lastMsgIos:styles.lastMSgAndroid} numberOfLines={1} ellipsizeMode={'tail'}>{item.recentMsg}</Text>       
                </View>
            </Pressable>
        </>
    )})




const ChatIOS:FC<AppProps> = ({height,width}):JSX.Element => {

    const keyExtractor = (item:RenderProp):string => item.id;

    const renderItem:ListRenderItem<RenderProp> = ({item}) =>(<RenderItem item={item} />);

    const Layout = (data:RenderProp[]| null | undefined, index:number):{length:number,offset:number,index:number} => (
        {length: height*0.091, offset: (height*0.091 * index), index}
    )
    const navigation = useNavigation<StackNavigationProp<AppStackIOSParams,'TabNavigatorsIOS'>>();

    const {profile} = useAppSelector((state)=>state.cart.auth.value);


    const data = [
        {
            id:profile?.user_id ==='2a52bc96-73c8-44dc-b8bb-3bc9bfae5812' ? '6fcc8edd-b664-4a76-bf15-6dc2c9e984a1':'2a52bc96-73c8-44dc-b8bb-3bc9bfae5812',
            // imgUrl : require('../../../assets/images/profPics/1.png'),
            name:'Liya',
            recentMsg:'How are you doin?',
            timestamp : '11:00 AM',
        },
         {
            id:'2',
            imgUrl : require('../../../assets/images/profPics/2.png'),
            name:'Karen',
            recentMsg:'Explain me the current sprint,I need to know more!',
            timestamp : '2:00 PM',
        },
        {
            id:'3',
            imgUrl : require('../../../assets/images/profPics/3.png'),
            name:'Tessa',
            recentMsg:'We should submit an email to the testing team',
            timestamp : '2:00 PM',
        },
        {
            id:'4',
            imgUrl : require('../../../assets/images/profPics/4.png'),
            name:'Ren',
            recentMsg:'Hey,Sahad can you help me with this problem,I am stuck',
            timestamp : '2:00 PM',
        },
        {
            id:'5',
            // imgUrl : require('../../../assets/images/profPics/5.png'),
            name:'Michel',
            recentMsg:'Did you explain your situation to the manager?',
            timestamp : '2:00 PM',
        },
        {
            id:'6',
            imgUrl : require('../../../assets/images/profPics/6.png'),
            name:'Dua',
            recentMsg:'Let get it done together',
            timestamp : '2:00 PM',
        },
        {
            id:'7',
            imgUrl : require('../../../assets/images/profPics/7.png'),
            name:'Max',
            recentMsg:'What do you think about this?',
            timestamp : '2:00 PM',
        },
    ]

  return (
    <>
        {
            Platform.OS==='ios' ? (  <ChatListIOSHeader height={height} width={width} />) : <ChatListAndroidHeader />
        }
      
        <FlatList style={Platform.OS==='android'?styles.androidFlatStyle:styles.iosFlatStyle} onScroll={(e)=>{
        if(e.nativeEvent.contentOffset.y<-10){
            navigation.navigate('Search');
        }
    }} showsVerticalScrollIndicator={false} data={data} ListHeaderComponent={ListHeaderComp} renderItem={renderItem} keyExtractor={keyExtractor} getItemLayout={Layout} />
    </>
  )
}

export default ChatIOS;

const styles= StyleSheet.create({
    androidFlatStyle:{
        marginTop:'8%',
    },
    iosFlatStyle:{
        marginTop:0,
    },
    androidListStyle:{width:width,flexDirection:'row',margin:height*0.006,alignItems:'center',justifyContent:'center',height:height*0.08,marginTop:height*0.0006,marginBottom:height*0.0008},
    iosListStyle:{width:width,flexDirection:'row',margin:height*0.003,alignItems:'center',justifyContent:'center',height:height*0.085},
    androidImg:{height:height*0.055,width:height*0.055,borderRadius:height},
    iosImg:{height:height*0.06,width:height*0.06,borderRadius:height},
    altImg:{height:height*0.06,width:height*0.06,borderRadius:height,backgroundColor:Platform.OS==='ios'?IosColors.colors.zBlue:AndroidColors.colors.zBlue,alignItems:'center',justifyContent:'center'},
    altText:{fontSize:height*0.024,color:Platform.OS==='ios'?IosColors.colors.primary:AndroidColors.colors.primary},
    cntHolder:{marginLeft:height*0.01,width:'75%',},
    cntAligner:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
    nameStyleIOS:{color: IosColors.colors.secondary,fontSize:height*0.021,fontWeight:'600'},
    nameStyleAndroid:{color: AndroidColors.colors.secondary,fontSize:height*0.019,fontWeight:'400'},
    lastMSgAndroid:{color:'gray',marginTop:height*0.005,fontSize:height*0.016,width:'83%',},
    lastMsgIos:{color:IosColors.colors.zGray,marginTop:height*0.005,fontSize:height*0.018,width:'83%',},

    
})