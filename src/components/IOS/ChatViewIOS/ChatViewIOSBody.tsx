import { View, Text, KeyboardAvoidingView, FlatList, ListRenderItem, ImageSourcePropType, Image, TextInput } from 'react-native'
import React, { FC, memo } from 'react'
import { useAppSelector } from '../../../Hooks/hooks';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackIOSParams } from '../../../router/IOSNavigators/AppStackIOS';
import { Dimensions } from 'react-native';


type AppProps = {
    height:number,
    width:number,
}
type RenderType = {
    sender: { 
        id: string; 
        name: string; 
        img_url: ImageSourcePropType; 
    },
    is_private: boolean,
    reciever: {
        id: string;
        name: string;
        img_url: any;
    },
    update_history: { 
        content: string,
        updated_at: string
    }[]; 

}
type Render = {
    item:RenderType,
}

const data = [
    {
        sender:{
            id:'1',
            name:'Ren',
            img_url:require('../../../assets/images/profPics/5.png'),
        },
        is_private:true,
        reciever:{
            id:'680e7fc4-d135-4f35-83e0-8ef578926fe4',
            name:'Michel',
            img_url:require('../../../assets/images/profPics/6.png'),
        },
        update_history:[
            {
                content: "Hi,Sahad can you help me with some scripts",
                updated_at:'2023-01-17T10:19:06.031Z',
            }
        ]
    },
    {
        sender:{
            id:'680e7fc4-d135-4f35-83e0-8ef578926fe4',
            name:'Michel',
            img_url:require('../../../assets/images/profPics/6.png'),
        },
        is_private:true,
        reciever:{
            id:'1',
            name:'Ren',
            img_url:require('../../../assets/images/profPics/5.png'),
        },
        update_history:[
            {
                content: "Why not let's finish it together",
                updated_at:'2023-01-17T10:19:06.031Z',
            }
        ]
    },
];

const RenderItem:FC<Render> = memo(({item}):JSX.Element=>{
    const {profile} = useAppSelector((state)=>state.cart.auth.value);
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    const {height,width} = Dimensions.get('screen');

        return(
        <>
            {
                item.sender.id===profile?.user_id ?
                
                <View style={{flexDirection:'row',width:width,justifyContent:'flex-end',marginTop:height*0.03,}}>
                    <View style={{flexDirection:'column',alignItems:'flex-end',marginRight:height*0.03}}>
                        <Text style={{color:colors.zGray,fontSize:height*0.017}}>You</Text>
                        <View style={{backgroundColor:colors.zBlue,alignItems:'flex-end',marginTop:height*0.01,borderRadius:height*0.01,maxWidth:width*0.7}}>
                            <Text style={{margin:height*0.015,color:colors.secondary,fontSize:height*0.019}}>{item.update_history[0].content}</Text>
                        </View>
                    </View>
                </View>
                :
                <View style={{margin:height*0.03,flexDirection:'row'}}>
                    <Image source={item.sender.img_url} style={{height:width*0.09,width:width*0.09,borderRadius:height,}} />
                    <View style={{marginLeft:height*0.01}}>
                        <Text style={{color:colors.zGray,fontSize:height*0.017}}>{item.sender.name}</Text>
                        <View style={{backgroundColor:colors.zLgray,marginTop:height*0.01,borderRadius:height*0.01,maxWidth:width*0.7}}>
                            <Text style={{margin:height*0.015,color:colors.secondary,fontSize:height*0.019}}>{item.update_history[0].content}</Text>
                        </View>
                    </View>
                </View>
            }
        </>
    )
});





const ChatViewIOSBody:FC<AppProps> = ({height,width,}):JSX.Element => {
    


    const renderItem:ListRenderItem<RenderType> = ({item})=> <RenderItem item={item} />
    const {colors} = useAppSelector((state)=>state.cart.color.value);

    return (
        <KeyboardAvoidingView style={{flex:1}}>
            
            <FlatList data={data.reverse()} inverted={true} renderItem={renderItem}  />
            <TextInput  style={{margin:height*0.02,marginTop:height*0.01,backgroundColor:colors.zLgray,height:height*0.04}} />

        </KeyboardAvoidingView>
    )
}

export default ChatViewIOSBody;