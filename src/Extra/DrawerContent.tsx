import { View, Text, Image, Pressable, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { Switch } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OctIcon from 'react-native-vector-icons/Octicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Antd from 'react-native-vector-icons/AntDesign';
import { useAppDispatch } from '../Hooks/hooks';
import { logoutController } from '../store/store';
import {height,mSize,width} from '../utils/Metrics';
import { AndroidColors } from '../utils/Colors';
import { DrawerActions, useNavigation } from '@react-navigation/native';

type Switch=boolean;

export default function DrawerContent() {


    const [isSwitchOn, setIsSwitchOn] = React.useState<Switch>(false);
    const [logout, SetLogout] = React.useState<Switch>(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    
    const dispatch = useAppDispatch();
   

  return (
    <View style={styles.parent}>
        <View >
        <StatusBar  backgroundColor={AndroidColors.colors.primary} barStyle={'dark-content'}/>
            <Image source={require('../assets/images/item.jpg')} style={styles.profImgStyle} resizeMode='contain' />
            <View>
                <View style={{flexDirection:'row',margin:width(13),justifyContent:'space-between',alignItems:'center'}}>
                    <View>
                        <Text style={styles.nameStyle}>sahadwg</Text>
                        <Text style={styles.mailStyle}>sahadwg@gmail.com</Text>
                    </View>
                    <Pressable onPress={()=>SetLogout(!logout)}>
                    <Material name={logout?'arrow-up-drop-circle':'arrow-down-drop-circle'}  size={height(22)} color={'lightgray'} />
                    </Pressable>

                </View>
            </View>

        <View style={styles.dividerStyle} />

       
            {
                logout ? 
                <>
                     <TouchableOpacity onPress={()=>dispatch(logoutController())} style={[styles.barStyle]}>
                        <Antd name='logout' size={22} color={'gray'} />
                        <Text style={styles.barText}>Log Out</Text>
                    </TouchableOpacity>
                </>
                :
                <>
                    <View style={styles.contentHolder}>
                        <View style={styles.switchCntrStyle}>
                        <View>
                        <Text style={styles.switchTxt1}>Remote Work</Text>
                        <Text style={styles.switchTxt2}>Checked out</Text>
                        </View>
                        <View style={styles.divider1Style} />
                        <Switch  value={isSwitchOn} onValueChange={onToggleSwitch} />

                        </View>
                    </View>

                    <View style={[styles.barStyle,{marginLeft:width(25)}]}>
                        <OctIcon name='dot-fill' size={height(20)} color={'#5DBB63'} />
                        <Text style={[styles.barText,{marginLeft:width(30)}]}>Available</Text>
                    </View>

                    <View style={styles.barStyle}>
                        <Ionicons name='at' size={height(20)} color={'gray'} />
                        <Text style={styles.barText}>Mentions</Text>
                    </View>

                    <View style={styles.barStyle}>
                        <Ionicons name='checkmark-done' size={height(20)} color={'gray'} />
                        <Text style={styles.barText}>Reminders</Text>
                    </View>

                    <View style={styles.barStyle}>
                        <Ionicons name='star-outline' size={height(20)} color={'gray'} />
                        <Text style={styles.barText}>Starred Messages</Text>
                    </View>

                    <View style={styles.barStyle}>
                        <OctIcon name='dependabot' size={height(20)} color={'gray'} />
                        <Text style={styles.barText}>Bots</Text>
                    </View>

                    <View style={styles.barStyle}>
                        <Ionicons name='qr-code-sharp' size={height(20)} color={'gray'} />
                        <Text style={styles.barText}>Scan QR</Text>
                    </View>

                    <View style={styles.barStyle}>
                        <Ionicons name='settings-outline' size={height(20)} color={'gray'} />
                        <Text style={styles.barText}>Settings</Text>
                    </View>

                    <View style={styles.barStyle}>
                        <Ionicons name='notifications-outline' size={height(20)} color={'gray'} />
                        <Text style={styles.barText}>Resolve Notifications</Text>
                    </View>
                </>
            } 
             
         </View>

            <View >
        <View style={styles.dividerStyle} />

                    <View style={styles.barStyle}>
                        <Fontisto name='night-clear' size={height(20)} color={'gray'} />
                        <Text style={[styles.barText,{marginBottom:height(10)}]}>Night Mode</Text>
                    </View>
            </View>

         </View>
  )
}


const styles = StyleSheet.create({
    parent:{justifyContent:'space-between',flex:1},
    profImgStyle:{height:height(52),width:width(52),borderRadius:height(1000),margin:height(12),marginBottom:height(0)},
    nameStyle:{color:AndroidColors.colors.secondary,fontSize:mSize(17)},
    mailStyle:{color:AndroidColors.colors.zGray,fontSize:mSize(12)},
    dividerStyle:{height:0.3,width:'100%',backgroundColor:'lightgray'},
    contentStyle:{flex:1},
    contentHolder:{borderColor:'white',backgroundColor:'white',borderRadius:8,elevation:2,marginTop:height(10),margin:height(5)},
    barStyle:{flexDirection:'row',margin:height(10),marginTop:height(13),marginLeft:width(21)},
    barText:{marginLeft:width(25),fontSize:height(15),color:'black'},
    switchTxt1:{color:'black',fontSize:height(14),fontWeight:'600'},
    switchTxt2:{color:'gray',fontSize:height(12),marginTop:height(3)},
    switchCntrStyle:{borderColor:'white',flexDirection:'row',justifyContent:'space-between',margin:height(15),marginTop:height(15),marginBottom:height(20)},
    divider1Style:{width:width(0.5),height:'100%',backgroundColor:'lightgray'},

})