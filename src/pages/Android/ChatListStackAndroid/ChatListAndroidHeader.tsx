import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerStackParams } from '../../../router/AndroidNavigators/DrawerNavigators';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AndroidColors } from '../../../utils/Colors';
import { height } from '../../../utils/Dimension';


const ChatListAndroidHeader = () => {
    const navigation = useNavigation<DrawerNavigationProp<DrawerStackParams,'ChatList'>>();

    return (
      <View style={{height:height*0.06}}>
      <Pressable style={{height:height*0.06,borderColor:'gray',backgroundColor:'white',margin:'5%',marginTop:height*0.02,borderRadius:height*0.01,elevation:3,alignItems:'center',flexDirection:'row'}}>
          <Pressable onPress={()=>navigation.toggleDrawer()} style={{marginLeft:'1%',}}>
              <Ionicons name='ios-reorder-three-outline' size={height*0.03} style={{margin:height*0.01}} color={'black'}/>
          </Pressable>
          <Text style={{fontFamily:'ZohoRegular',marginLeft:'1%',fontSize:height*0.018,color:'gray'}}>Search</Text>
      </Pressable>
      </View>
    )
}

export default ChatListAndroidHeader