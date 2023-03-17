import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import CallList from '../../components/Android/CallListStackAndroid/CallList'
import ChannelListAndroid from '../../pages/Android/ChannelListStackAndroid/ChannelListAndroid'
import { useAppSelector } from '../../Hooks/hooks'
import ChatListIOS from '../../pages/IOS/ChatListStackIOS/ChatListIOS'


export type TabStackParams ={
  ChatList:undefined,
  ChannelDetails:undefined,
  CallList:undefined,
}


const Tab = createBottomTabNavigator<TabStackParams>();

export default function TabNavigators():JSX.Element {

  const {height,width} = Dimensions.get('screen');

  const {colors} = useAppSelector((state)=>state.cart.color.value)
  return (
    <Tab.Navigator  initialRouteName='ChatList' screenOptions={{headerShown:false,tabBarStyle:{height:height*0.08,elevation:3},headerTitleStyle:{margin:30} }}>
         
         <Tab.Screen name="CallList" component={CallList} options={{
            tabBarLabel:()=>null,
            
            tabBarIcon: ({size,focused,color}) => {
              return (
                <View style={{backgroundColor:'white',width:width/3,alignItems:'center'}}>
                  <Ionicon name={focused?'call':'call-outline'} color={focused?colors.zBlue:'gray'} size={height*0.024} />
                 
                <Text style={{color: focused ? colors.zBlue : 'gray',fontSize:height*0.015,marginBottom:height*0.015}}>Calls</Text>

                </View>
              );
            },
          }} />

        <Tab.Screen name="ChatList" component={ChatListIOS} options={{
           tabBarLabel:()=>null,
            
            tabBarIcon: ({size,focused,color}) => {
              return (
                <View style={{backgroundColor:'white',width:width/3,alignItems:'center'}}>
                  <Ionicon name={focused?'ios-chatbubbles-sharp':'ios-chatbubbles-outline'} color={focused?colors.zBlue:'gray'} size={height*0.024} />
                 
                  
                
                <Text style={{color: focused ? colors.zBlue : 'gray',fontSize:height*0.015,marginBottom:height*0.015}}>Chats</Text>

                </View>
              );
            },
          }} />

        <Tab.Screen name="ChannelDetails" component={ChannelListAndroid} options={{
            tabBarLabel:()=>null,
            
            tabBarIcon: ({size,focused,color}) => {
              return (
                <View style={{backgroundColor:'white',width:width/3,alignItems:'center'}}>
                  <Material name={focused?'account-group':'account-group-outline'} color={focused?colors.zBlue:'gray'} size={height*0.024} />
                  
                <Text style={{color: focused ? colors.zBlue : 'gray',fontSize:height*0.015,marginBottom:height*0.015}}>Channels</Text>
                
                </View>

              );
            },
          }} />

       


    </Tab.Navigator>
  )
}