import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import OrgFlatlist from './OrganizzationFlatLIst/OrgFlatlist';

type AppProps = {
    height: number,
    width: number,
}


interface OrganisationType {
    id: string,
    name: string,
    isDefault:boolean,
    owner:object
}

const OrganisationBody:FC<AppProps> = ({height,width}) => {

    const [orgState,setOrgState] = useState<Array<OrganisationType>>([]);
    


    useEffect(()=>{
        fetchOrg();
    },[]);
    useEffect(()=>{
        console.log(JSON.stringify(orgState));
    },[orgState]);

    const fetchOrg = async ():Promise<void> => {
        try {
            const {data} = await axios.get('/organization/user-organizations');

            if(data){
                setOrgState(data.organizations);

            }
        } catch (err:any) {
            console.log(err.request.responseText);
        }
    }

  


  return (
    <>
       <OrgFlatlist height={height} width={width} orgState={orgState}   />  
    </>
  )
}

export default OrganisationBody