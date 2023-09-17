import { useContext } from 'react';
import React  from "react";
import {Text,TextInput,View} from 'react-native';
import { AppContext } from '../context/app_context';

const UserDataInput = () => {
  const appContext = useContext(AppContext)


  return(
    <View style={{flex:1, flexDirection:'row', 
    alignItems:'center', justifyContent:'flex-end'}}>
      <Text>{'Label123 ' + appContext.personCount}</Text>
      <TextInput style={{width:60}}/>
    </View>
  )
}

export default UserDataInput

