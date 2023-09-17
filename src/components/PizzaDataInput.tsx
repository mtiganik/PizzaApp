import React, {useContext, useState} from "react";
import {Button, Text,View} from 'react-native';
import UserDataInput from "./UserDataInput";
import { AppContext } from "../context/app_context"; 

const PizzaDataInput = () => {
  const [counter, setCounter] = useState(0)

  const appContext = useContext(AppContext)
  return(
    <View style={{flex: 1, flexDirection: 'row',
     flexGrow: 1, alignItems:'center'}}>
      <UserDataInput/>
      <UserDataInput/>
      <Button title={'Add ' + counter.toString() + ' ' + appContext.personCount} 
      onPress={() => {
        setCounter(counter +1);
        appContext.personCount = appContext.personCount +1
      }}/>
    </View>
  )
}

export default PizzaDataInput