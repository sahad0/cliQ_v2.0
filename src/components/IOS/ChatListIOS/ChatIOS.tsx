import { View, Text, Image, ListRenderItem, ImageSourcePropType, FlatList, Pressable } from 'react-native'
import React, { FC, memo } from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import ChatListIOSHeader from './ChatListIOSHeader';
import ChatListIOSPins from './ChatListIOSPins';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackIOSParams } from '../../../router/IOSNavigators/AppStackIOS';
import { height, width } from '../../../utils/Dimension';

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


const data = [
    {
        id:'1',
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


    const ListHeaderComp = ():JSX.Element =>{

        return(
            <>
                <ChatListIOSPins height={height} width={width} />
            </>
    )}

    const RenderItem:FC<Render> = memo(({item})=>{

        const {colors} = useAppSelector((state)=>state.cart.color.value);

        const navigation = useNavigation<StackNavigationProp<AppStackIOSParams,'TabNavigatorsIOS'>>();
        return(
        <>
            <Pressable onPress={()=>navigation.navigate('ChatViewIOS',{data:{id:item.id,name:item.name}})} style={{width:width,flexDirection:'row',margin:height*0.003,alignItems:'center',justifyContent:'center',height:height*0.085}}>
                <View style={{width:'15%',}}>
                    {
                        item.imgUrl ? 
                        <>
                            <Image source={item.imgUrl} style={{height:height*0.06,width:height*0.06,borderRadius:height}} />
                        </>
                        :
                        <>
                            <View style={{height:height*0.06,width:height*0.06,borderRadius:height,backgroundColor:colors.zBlue,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:height*0.025,color:colors.secondary}}>{[...item.name][0]}</Text>
                            </View>
                        </>
                    }
                </View>
                <View style={{marginLeft:height*0.01,width:'75%',}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{color:colors.secondary,fontSize:height*0.021,fontWeight:'600'}}>{item.name}</Text>
                        <Text  style={{color:colors.zGray,fontSize:height*0.014}}>{item.timestamp}</Text>
                    </View>
                    <Text style={{color:colors.zGray,marginTop:height*0.005,fontSize:height*0.018,width:'83%',}} numberOfLines={1} ellipsizeMode={'tail'}>{item.recentMsg}</Text>       
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

  return (
    <>
        <ChatListIOSHeader height={height} width={width} />
        <FlatList onScroll={(e)=>{
        if(e.nativeEvent.contentOffset.y<-10){
            navigation.navigate('Search');
        }
    }} showsVerticalScrollIndicator={false} data={data} ListHeaderComponent={ListHeaderComp} renderItem={renderItem} keyExtractor={keyExtractor} getItemLayout={Layout} />
    </>
  )
}

export default ChatIOS;