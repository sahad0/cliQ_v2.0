import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AndroidStackParams } from '../../../router/AndroidNavigators/AndroidStackNav';
import { useAppSelector } from '../../../Hooks/hooks';

type AppProps = {
    height:number,
    width:number,
}


const ChannelListAndroidMenuBody:FC<AppProps> = ({height,width}):JSX.Element => {
    const navigation = useNavigation<NativeStackNavigationProp<AndroidStackParams,'ChannelMenu'>>();
    const {colors} = useAppSelector((state)=>state.cart.color.value);


    return(
        <View style={{backgroundColor:'white',margin:height*0.01,height:height*0.25,borderRadius:height*0.01}}>
            <View style={{margin:height*0.03}}>
                <Text style={{color:'black',fontSize:height*0.02}}>Create a Channel</Text>
                <Text style={{color:'gray',fontSize:height*0.016,marginTop:height*0.02}}>
                    Designed for enhanced collaboration, channels are meant to improve workplace communication at your organization.
                </Text>

                <View style={{height:0.5,backgroundColor:'lightgray',marginTop:height*0.03}} />
                <TouchableOpacity onPress={()=>navigation.navigate('ChannelForm')}>
                    <Text style={{backgroundColor:'white',color:colors.zBlue,fontSize:height*0.02,marginTop:height*0.02,alignSelf:'center'}}>Create Channel</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

export default ChannelListAndroidMenuBody