
import React, { useState } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Header from './src/components/Header';
import UserDataInput from './src/components/UserDataInput';
import PizzaDataInput from './src/components/PizzaDataInput';
import { AppContext, DefaultAppState, IAppContext } from './src/context/app_context';

export default function App() {

  const[pizzaState, setPizzaState] = useState(DefaultAppState )
  
  const updateAddone = () => {
    setPizzaState({...pizzaState, personCount: pizzaState.personCount +1 })
  }
  
  return (
    <AppContext.Provider value={{...pizzaState, addOneToCount: updateAddone}} >

      <View style={styles.container}>
        <View style={{ flex: 1, flexGrow: 1, }}>
          <Header />
          <UserDataInput />
          <UserDataInput />
          <PizzaDataInput />
        </View>
        <View style={{
          flex: 1,
          flexGrow: 1,
        }}>
          <Text>{JSON.stringify(pizzaState, undefined, 4)}</Text>
        </View>

      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
