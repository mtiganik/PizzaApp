
import React, { useState } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Header from './src/components/Header';
import UserDataInput from './src/components/UserDataInput';
import PizzaDataInput from './src/components/PizzaDataInput';

export default function App() {
  const[pizzaState, setPizzaState] = useState({
    personCount: 1,
    onePersonEats: 150,
    newPizzaDiameter: 24, 
    newPizzaPrice: 15.75,
    calculatedPizzas: []
  })
  
  return (
    <View style={styles.container}>
  <View style={{flex: 1,flexGrow: 1,}}>
          <Header/>
    <UserDataInput/>
    <UserDataInput/>
    <PizzaDataInput/>
    </View>
    <View style={{
          flex: 1,
          flexGrow: 1,
        }}>
    <Text>{JSON.stringify(pizzaState, undefined, 4)}</Text>
    </View>

    </View>
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
