import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import OrgFlatlist from './OrganizzationFlatLIst/OrgFlatlist'

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



  


  return (
    <>
       <OrgFlatlist height={height} width={width}    />  
    </>
  )
}

export default OrganisationBody