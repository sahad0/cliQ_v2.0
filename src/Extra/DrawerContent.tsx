import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Switch } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OctIcon from 'react-native-vector-icons/Octicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Antd from 'react-native-vector-icons/AntDesign';
import { useAppDispatch } from '../Hooks/hooks';
import { logoutController } from '../store/store';
import { height, width } from '../utils/Dimension';


type Switch=boolean;

export default function DrawerContent() {


    const [isSwitchOn, setIsSwitchOn] = React.useState<Switch>(false);
    const [logout, SetLogout] = React.useState<Switch>(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const dispatch = useAppDispatch();
  

  return (
    <View>
        <Image source={require('../assets/images/profile.png')} style={{height:height*0.07,width:height*0.07,marginLeft:width*0.03,marginTop:height*0.03}} resizeMode='cover' />
        <View style={{margin:height*0.02}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <View>
                    <Text style={{color:'black',fontSize:height*0.02}}>sahadwg</Text>
                    <Text style={{color:'gray',fontSize:height*0.014}}>sahadwg@gmail.com</Text>
                </View>
                <Pressable onPress={()=>SetLogout(!logout)}>
                <Material name={logout?'arrow-up-drop-circle':'arrow-down-drop-circle'}  size={height*0.028} color={'gray'} />
                </Pressable>

            </View>
        </View>

        <View style={{height:0.3,width:'100%',backgroundColor:'lightgray'}} />

       
        <View style={{height:'100%'}}>
            {
                logout ? 
                <>
                     <TouchableOpacity onPress={()=>dispatch(logoutController())} style={{flexDirection:'row',margin:height*0.03,alignItems:'center'}}>
                        <Antd name='logout' size={22} color={'gray'} />
                        <Text style={{marginLeft:width*0.05,fontSize:height*0.019,color:'black'}}>Log Out</Text>
                    </TouchableOpacity>
                </>
                :
                <>
                    <View style={{borderColor:'white',backgroundColor:'white',borderRadius:8,elevation:2,marginTop:height*0.02,margin:width*0.02,}}>
                        <View style={{borderColor:'white',flexDirection:'row',justifyContent:'space-between',margin:height*0.03,marginTop:height*0.015,marginBottom:height*0.015}}>
                        <View>
                        <Text style={{color:'black',fontSize:height*0.018}}>Remote Work</Text>
                        <Text style={{color:'gray',fontSize:height*0.015}}>Checked out</Text>
                        </View>
                        <Switch  value={isSwitchOn} onValueChange={onToggleSwitch} />

                        </View>
                    </View>

                    <View style={{flexDirection:'row',margin:height*0.03,alignItems:'center'}}>
                        <Ionicons name='phone-portrait-sharp' size={22} color={'green'} />
                        <Text style={{marginLeft:width*0.05,fontSize:height*0.019,color:'black'}}>Available</Text>
                    </View>

                    <View style={{flexDirection:'row',margin:height*0.03,alignItems:'center',marginTop:height*0.005}}>
                        <Ionicons name='at' size={25} color={'gray'} />
                        <Text style={{marginLeft:width*0.05,fontSize:height*0.019,color:'black'}}>Mentions</Text>
                    </View>

                    <View style={{flexDirection:'row',margin:height*0.03,alignItems:'center',marginTop:height*0.005}}>
                        <Ionicons name='checkmark-done' size={25} color={'gray'} />
                        <Text style={{marginLeft:width*0.05,fontSize:height*0.019,color:'black'}}>Reminders</Text>
                    </View>

                    <View style={{flexDirection:'row',margin:height*0.03,alignItems:'center',marginTop:height*0.005}}>
                        <Ionicons name='star-outline' size={22} color={'gray'} />
                        <Text style={{marginLeft:width*0.05,fontSize:height*0.019,color:'black'}}>Starred Messages</Text>
                    </View>

                    <View style={{flexDirection:'row',margin:height*0.03,alignItems:'center',marginTop:height*0.005}}>
                        <OctIcon name='dependabot' size={22} color={'gray'} />
                        <Text style={{marginLeft:width*0.05,fontSize:height*0.019,color:'black'}}>Bots</Text>
                    </View>

                    <View style={{flexDirection:'row',margin:height*0.03,alignItems:'center',marginTop:height*0.005}}>
                        <Ionicons name='qr-code-sharp' size={22} color={'gray'} />
                        <Text style={{marginLeft:width*0.05,fontSize:height*0.019,color:'black'}}>Scan QR</Text>
                    </View>

                    <View style={{flexDirection:'row',margin:height*0.03,alignItems:'center',marginTop:height*0.005}}>
                        <Ionicons name='settings-outline' size={22} color={'gray'} />
                        <Text style={{marginLeft:width*0.05,fontSize:height*0.019,color:'black'}}>Settings</Text>
                    </View>

                    <View style={{flexDirection:'row',margin:height*0.03,alignItems:'center',marginTop:height*0.005}}>
                        <Ionicons name='notifications-outline' size={22} color={'gray'} />
                        <Text style={{marginLeft:width*0.05,fontSize:height*0.019,color:'black'}}>Resolve Notifications</Text>
                    </View>
                </>
            }
            
        </View>
    </View>
  )
}