import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerStackParams } from '../../../router/AndroidNavigators/DrawerNavigators';
import { height, mSize, width } from '../../../utils/Metrics';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AndroidColors } from '../../../utils/Colors';


const ChatListAndroidHeader = () => {
    const navigation = useNavigation<DrawerNavigationProp<DrawerStackParams,'ChatList'>>();

    return (
      <View style={{height:height(50)}}>
      <Pressable style={{height:height(45),borderColor:'gray',backgroundColor:'white',margin:height(10),marginTop:height(10),borderRadius:height(5),elevation:3,alignItems:'center',flexDirection:'row'}}>
          <Pressable onPress={()=>navigation.toggleDrawer()} style={{marginLeft:width(15),}}>
              <Ionicons name='ios-reorder-three-outline' size={height(25)} style={{margin:height(5)}} color={'black'}/>
          </Pressable>
          <Text style={{fontFamily:'ZohoRegular',marginLeft:width(15),margin:height(10),fontSize:mSize(15),color:'gray'}}>Search</Text>
      </Pressable>
      </View>
    )
}

export default ChatListAndroidHeader