import React, { PureComponent } from 'react'
import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconi from 'react-native-vector-icons/SimpleLineIcons';
import { Fonts } from '../../../../utils/Fonts';

interface OrganisationType {
    id: string,
    name: string,
    isDefault:boolean,
    owner:object
}

type Props = {
    height: number,
    width: number,
    orgState:OrganisationType[],
}

type LayoutType = { length: number; offset: number; index: number; }



  
  export default class OrgFlatlist extends PureComponent<Props> {

    keyExtractor = (item:OrganisationType):string => item.id;
    renderItem:ListRenderItem<OrganisationType> = ({ item }) => (
      <TouchableOpacity disabled={item.isDefault?true:false} style={{marginBottom:this.props.height*0.012,height:this.props.height*0.08,width:this.props.width*0.9,borderColor:'white',elevation:3,justifyContent:'center',alignSelf:'center',borderRadius:10,backgroundColor:item.isDefault ? '#2677C3':'white'}}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
              <Icons name='hash' size={15} style={{margin:this.props.height*0.013,marginLeft:this.props.width*0.05}} color={item.isDefault?'white':'#2677C3'}/>
              <Text style={{fontFamily:Fonts.regular,fontSize:this.props.height*0.02,color:item.isDefault ? 'white' :'#2677C3'}}>{item.name}</Text>
          </View>
          {
            item.isDefault && (
              <TouchableOpacity style={{marginRight:this.props.width*0.05,backgroundColor:'white',elevation:5,borderRadius:this.props.height*0.05}}>
                <Icon name='export' size={20} color={'black'} style={{margin:this.props.height*0.01,}} />
              </TouchableOpacity>
            )
          }
         
      </View>
  </TouchableOpacity>
    );
    
   

    HeaderComp = ()=>(
      <View style={{margin:this.props.height*0.04,flexDirection:'row',alignItems:'center'}}>
          <View style={{backgroundColor:'#2677C3',borderRadius:this.props.height*0.02,borderColor:'black',elevation:3}}>
          <Iconi name='organization' size={25} style={{margin:this.props.height*0.013,}} color={'#FFFFFF'}/>
          </View>
          <Text style={{fontFamily:Fonts.regular,fontSize:this.props.height*0.025,color:'black',marginLeft:this.props.width*0.03}}>Organizations</Text>
      </View>
    )

    Layout = (data:OrganisationType[]| null | undefined, index:number) => (
      {length: this.props.height*0.08, offset: (this.props.height*0.08 * index)+this.props.height*0.012, index}
    )


  
    render() {
      return (
        <FlatList
          getItemLayout={this.Layout}
          ListHeaderComponent={this.HeaderComp}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          data={this.props.orgState}
        />
      );
    }
  }


 


