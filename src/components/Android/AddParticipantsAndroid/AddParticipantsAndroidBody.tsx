import { View, Text, Image, ListRenderItem, FlatList, ActivityIndicator } from 'react-native'
import React, { Dispatch, FC, SetStateAction, memo } from 'react'
import { Selected, SelectedState } from '../../../pages/Android/ChannelListStackAndroid/AddParticipantsAndroid';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { height, width } from '../../../utils/Dimension';
import { Pressable } from 'react-native';
import AddParticipantsExt from './AddParticipantsAndroidExt';
import { useAppSelector } from '../../../Hooks/hooks';


export type ItemProps = {
    id:string,
    email:string,
    profile: {
        first_name: string,
        last_name:string,
        mini_avatar_url:string,
    }
}

interface RenderType {
item:ItemProps,
addId:(id:string,name:string)=>void,
selected:Selected[],
}

interface AppProps  {
    data: ItemProps[];
    selected:Selected[],
    setSelected:Dispatch<SetStateAction<SelectedState>>,
    eventReducer:{
        loading?: boolean,
    }|undefined

}

const RenderItem:FC<RenderType> = memo(({item,addId,selected}):JSX.Element=>{

    let bouncyCheckboxRef:BouncyCheckbox|null =null;
    const {colors} = useAppSelector((state)=>state.cart.color.value);
    

    return(
    <>
        <Pressable onPress={()=> bouncyCheckboxRef?.onPress()} style={{borderColor:'gray', height:height*0.085,alignSelf:'center',width:width,backgroundColor:'white',borderRadius:height*0.012,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:height*0.007,}}>
            <View style={{borderRadius:height*0.03,padding:height*0.00,flexDirection:'row',backgroundColor:'white',alignItems:'center'}}>
                <View style={{marginLeft:height*0.021250}}>
                    <Image source={require('../../../assets/images/player/p1.png')} style={{height:height*0.060,width:height*0.060,}} />
                </View> 
                <View style={{marginLeft:width*0.03}}>
                    <Text style={{color:'black',fontSize:height*0.018}} >{item.profile.first_name}</Text>
                    <Text style={{color:'gray',fontSize:height*0.015}}>{item.email}</Text>
                </View>

            </View>
            <View style={{marginRight:width*0.03}}>
              
             {selected?.some(items =>  items.id===item.id) ?
             <>
                 <BouncyCheckbox disableBuiltInState isChecked={true} ref={(ref):any=>bouncyCheckboxRef=ref}  fillColor={colors.zBlue} size={height*0.025} useNativeDriver={true} onPress={()=>{addId(item.id,item.profile.first_name)}} />

             </> :
             <>

                 <BouncyCheckbox disableBuiltInState  isChecked={false} ref={(ref):any=>bouncyCheckboxRef=ref} fillColor={colors.zBlue}  size={height*0.025} useNativeDriver={true} onPress={()=>{addId(item.id,item.profile.first_name)}} />
             

             </> }  
                     
                

            </View>

        </Pressable>
    </>
)})

const AddParticipantsAndroidBody:FC<AppProps> = ({selected,setSelected,data,eventReducer}) => {

    const addId = (id:string,name:string)=>{

        
        let updated = [...selected].filter((k)=>{
            return k.id !==id;
        });

        if(updated.length===selected.length){
            updated = [{id:id,name:name},...updated]
        }

        
        setSelected(updated);


    }

    const removeId = (id:string)=>{
        
        let updated = [...selected].filter((k)=>{
            return k.id !==id;
        });

        setSelected(updated);
    }

    

    const keyExtractor = (item:ItemProps):string => item.id;

    const renderItem:ListRenderItem<ItemProps> = ({item})=> <RenderItem selected={selected}   addId={addId} item={item}/>

    const Layout = (data:ItemProps[]| null | undefined, index:number):{length:number,offset:number,index:number} => (
        {length: height*0.085, offset: (height*0.085 * index), index}
      )




  return (
    <>
    <FlatList  legacyImplementation={false} getItemLayout={Layout}   showsVerticalScrollIndicator={false} style={{flex:1}} initialNumToRender={14} data={data} keyExtractor={keyExtractor}  renderItem={renderItem}   />
    {eventReducer?.loading ??
         <View style={{position:'absolute',alignItems:'center',justifyContent:'center',flex:1,}}>
            <ActivityIndicator color={'red'} size={height*0.05}  style={{left:width*0.45,height:height}} />

        </View>
    }

   
    {
        selected.length!==0 
        &&
        (  
            <>
                <AddParticipantsExt height={height} width={width} selected={selected} removeId={removeId} />
            </>
        )
    }
</>
  )
}

export default AddParticipantsAndroidBody