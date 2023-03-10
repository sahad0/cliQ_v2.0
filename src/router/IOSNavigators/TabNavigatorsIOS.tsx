import { View, Text, Dimensions, Image } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CallList from '../../pages/CommonPages/CallListStack/CallList';
import ChatList from '../../pages/CommonPages/ChatListStack/ChatList';
import ChannelDetails from '../../pages/CommonPages/CreateChannelStack/ChannelDetails';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FontAws from 'react-native-vector-icons/FontAwesome5';
import Antd from 'react-native-vector-icons/AntDesign';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import ChatListIOS from '../../pages/IOS/ChatListStackIOS/ChatListIOS';
import axios from 'axios';
import { height, width } from '../../utils/Dimension';
import ChannelListIOS from '../../pages/IOS/ChannelListStackIOS/ChannelListIOS';

export type TabStackParams ={
  ChatListIOS:undefined,
  ChannelList:undefined,
  CallList:undefined,
  CalanderList:undefined,
  ExtrasList:undefined,
}


const Tab = createBottomTabNavigator<TabStackParams>();

export default function TabNavigatorsIOS():JSX.Element {

  


  const {colors} = useAppSelector((state)=>state.cart.color.value);
 

    
  return (
    <Tab.Navigator    initialRouteName='ChatListIOS' screenOptions={{headerShown:false,tabBarStyle:{borderTopColor:colors.zBlack,backgroundColor:colors.zBlack,height:height*0.11}, }}>
         
         <Tab.Screen  name="ChatListIOS" component={ChatListIOS}  options={{
          
            tabBarLabel:()=>null,
            
            tabBarIcon: ({focused}) => {
              return (
                <>
                <View style={{backgroundColor:colors.zBlack,width:width/5,height:'100%',alignItems:'center'}}>
                <View style={{height:height*0.005,width:width*0.09,backgroundColor:focused?colors.zBlue:colors.zBlack,borderRadius:height*0.02,}} />

                 <IonIcons name='ios-chatbubble-ellipses' size={height*0.03} color={focused?colors.zBlue:colors.zGray} style={{marginTop:height*0.02}} />

                </View>
                </>
              );
            },
            
          }} />
          <Tab.Screen name="ChannelList" component={ChannelListIOS} options={{
            tabBarLabel:()=>null,
            
            tabBarIcon: ({size,focused,color}) => {
              return (
                <View style={{backgroundColor:colors.zBlack,width:width/5,height:'100%',alignItems:'center'}}>
                <View style={{height:height*0.005,width:width*0.09,backgroundColor:focused?colors.zBlue:colors.zBlack,borderRadius:height*0.02,}} />
                 <Antd name='appstore1' size={height*0.03} color={focused?colors.zBlue:colors.zGray} style={{marginTop:height*0.02}}/>

                </View>
              );
            },
          }} />
          <Tab.Screen name="CallList" component={ChatList} options={{
              tabBarLabel:()=>null,
                tabBarIcon: ({size,focused,color}) => {
                  return (
                    <View style={{backgroundColor:colors.zBlack,width:width/5,height:'100%',alignItems:'center'}}>
                    <View style={{height:height*0.005,width:width*0.09,backgroundColor:focused?colors.zBlue:colors.zBlack,borderRadius:height*0.02,}} />
                    <IonIcons name='ios-call' size={height*0.03} color={focused?colors.zBlue:colors.zGray} style={{marginTop:height*0.02}}/>
                    </View>
                  );
                },
              }} />

        <Tab.Screen name="ExtrasList" component={ChannelDetails} options={{
          tabBarLabel:()=>null,
          
          tabBarIcon: ({size,focused,color}) => {
            return (
              <View style={{backgroundColor:colors.zBlack,width:width/5,height:'100%',alignItems:'center'}}>
              <View style={{height:height*0.005,width:width*0.09,backgroundColor:focused?colors.zBlue:colors.zBlack,borderRadius:height*0.02,}} />
                <FontAws name='calendar-alt' size={height*0.03} color={focused?colors.zBlue:colors.zGray} style={{marginTop:height*0.02}}/>

               </View>

              );
            },
          }} />

          <Tab.Screen name="CalanderList" component={ChatList} options={{
             tabBarLabel:()=>null,
              
              tabBarIcon: ({size,focused,color}) => {
                return (
                  <View style={{backgroundColor:colors.zBlack,width:width/5,height:'100%',alignItems:'center'}}>
                  <View style={{height:height*0.005,width:width*0.09,backgroundColor:focused?colors.zBlue:colors.zBlack,borderRadius:height*0.02,}} />
                   <IonIcons name='ios-ellipsis-vertical-circle-sharp' size={height*0.035} color={focused?colors.zBlue:colors.zGray} style={{marginTop:height*0.02}}/>
          
                  </View>
                );
              },
            }} />
       


    </Tab.Navigator>
  )
}