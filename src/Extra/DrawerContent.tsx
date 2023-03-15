import { View, Text, Image, Pressable, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { Switch } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OctIcon from 'react-native-vector-icons/Octicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAws from 'react-native-vector-icons/FontAwesome'
import Antd from 'react-native-vector-icons/AntDesign';
import { useAppDispatch, useAppSelector } from '../Hooks/hooks';
import { logoutController } from '../store/store';
import {horizontalScale,moderateScale,verticalScale} from '../utils/Metrics';
import { AndroidColors } from '../utils/Colors';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { height, width } from '../utils/Dimension';

type Switch=boolean;

export default function DrawerContent() {


    const [isSwitchOn, setIsSwitchOn] = React.useState<Switch>(false);
    const [logout, SetLogout] = React.useState<Switch>(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const {profile} = useAppSelector((state)=>state.cart.auth.value)
    const dispatch = useAppDispatch();
   

  return (
    <View style={styles.parent}>
        <View >
        <StatusBar  backgroundColor={AndroidColors.colors.primary} barStyle={'dark-content'}/>
            <Image source={require('../assets/images/item.jpg')} style={styles.profImgStyle} resizeMode='contain' />
            <View>
                <View style={{flexDirection:'row',margin:'5%',justifyContent:'space-between',alignItems:'center'}}>
                    <View>
                        <Text style={styles.nameStyle}>{profile?.first_name}</Text>
                        <Text style={styles.mailStyle}>{profile?.email}</Text>
                    </View>
                    <Pressable onPress={()=>SetLogout(!logout)}>
                    <Material name={logout?'arrow-up-drop-circle':'arrow-down-drop-circle'}  size={height*0.03} color={'lightgray'} />
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

                    <View style={[styles.barStyle,{marginLeft:'8%'}]}>
                        <View style={{width:'7%',alignSelf:'center',justifyContent:'center'}}>
                            <FontAws name='circle' size={height*0.016} style={{alignSelf:'center'}} color={'green'} />
                        </View>
                        <Text style={[styles.barText]}>Available</Text>
                    </View>

                    <View style={[styles.barStyle,{marginLeft:'8%'}]}>
                        <View style={{width:'7%',}}>
                            <Ionicons style={{alignSelf:'center'}} name='at' size={height*0.025} color={'gray'} />
                        </View>
                        <Text style={styles.barText}>Mentions</Text>
                    </View>

                    <View style={[styles.barStyle,{marginLeft:'8%'}]}>
                        <View style={{width:'7%',}}>
                            <Ionicons style={{alignSelf:'center'}} name='checkmark-done' size={height*0.025} color={'gray'} />
                        </View>
                        <Text style={styles.barText}>Reminders</Text>
                    </View>
                    <View style={[styles.barStyle,{marginLeft:'8%'}]}>
                        <View style={{width:'7%',}}>
                            <Ionicons style={{alignSelf:'center'}} name='star-outline' size={height*0.025} color={'gray'} />
                        </View>
                        <Text style={styles.barText}>Starred Messages</Text>
                    </View>
                    <View style={[styles.barStyle,{marginLeft:'8%'}]}>
                        <View style={{width:'7%',}}>
                            <OctIcon name='dependabot'  size={height*0.025} color={'gray'} />
                        </View>
                        <Text style={styles.barText}>Bots</Text>
                    </View>
                    

                    

                    <View style={[styles.barStyle,{marginLeft:'8%'}]}>
                        <View style={{width:'7%',}}>
                        
                        <Ionicons name='qr-code-sharp'style={{alignSelf:'center'}} size={height*0.025} color={'gray'} />
                        </View>
                        <Text style={styles.barText}>Scan QR</Text>
                    </View>

                    <View style={[styles.barStyle,{marginLeft:'8%'}]}>
                    <View style={{width:'7%',}}>
                        
                        <Ionicons name='settings-outline' style={{alignSelf:'center'}} size={height*0.025} color={'gray'} />
                        </View>
                        <Text style={styles.barText}>Settings</Text>
                    </View>

                    <View style={[styles.barStyle,{marginLeft:'8%'}]}>
                    <View style={{width:'7%',}}>
                        
                        <Ionicons style={{alignSelf:'center'}} name='notifications-outline' size={height*0.025} color={'gray'} />
                        </View>
                        <Text style={styles.barText}>Resolve Notifications</Text>
                    </View>
                    <View >
                    <View style={styles.dividerStyle} />
                        <View style={[styles.barStyle,{marginLeft:'8%'}]}>
                            <View style={{width:'7%',}}>
                            
                            <Fontisto name='night-clear' style={{alignSelf:'center'}} size={height*0.025} color={'gray'} />
                            </View>
                            <Text style={[styles.barText,{marginBottom:horizontalScale(10)}]}>Night Mode</Text>
                        </View>
                    </View>
                </>
            } 
             
         </View>

            

         </View>
  )
}


const styles = StyleSheet.create({
    parent:{justifyContent:'space-between',flex:1},
    profImgStyle:{height:height*0.06,width:height*0.06,borderRadius:height,margin:'3%',marginBottom:0},
    nameStyle:{color:AndroidColors.colors.secondary,fontSize:height*0.018},
    mailStyle:{color:AndroidColors.colors.zGray,fontSize:height*0.017},
    dividerStyle:{height:0.3,width:'100%',backgroundColor:'lightgray'},
    contentStyle:{flex:1},
    contentHolder:{borderColor:'white',backgroundColor:'white',borderRadius:8,elevation:2,marginTop:'5%',margin:'5%'},
    barStyle:{flexDirection:'row',margin:height*0.015,},
    barText:{marginLeft:height*0.03,fontSize:height*0.018,color:'black'},
    switchTxt1:{color:'black',fontSize:height*0.018,fontWeight:'600'},
    switchTxt2:{color:'gray',fontSize:height*0.016,marginTop:'5%'},
    switchCntrStyle:{borderColor:'white',flexDirection:'row',justifyContent:'space-between',margin:height*0.015,marginTop:height*0.015,},
    divider1Style:{width:height*0.001,height:'100%',backgroundColor:'lightgray'},

})