import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Entrada from './src/components/Entrada';
import Btn from './src/components/Btn';
import MoedaController from './src/controller/MoedaController';
import Resp from './src/components/Resp';

export default function App() {

  const control = MoedaController();
  const [valor, setValor] = useState(0);
  
  const [resultado, setResultado] = useState(0);
  const[moeda, setMoeda] = useState();

  
  function prepararCalculo(){
    
    setResultado(control.calcularConversao());
  }
  
  return (
    
      <View style = {styles.container}>
        <StatusBar style="auto" />
        <Text style = {styles.Text}>Escolha a moeda de origem</Text>
        <View style ={styles.bts}>
            <Btn onPress={() => {setMoeda('euro');}} label ='euro'></Btn>
            <Btn onPress={() => {setMoeda('dólar');}} label = 'dólar'></Btn>
            <Btn onPress={() => {setMoeda('real');}} label = 'real'></Btn>
        </View>
        
        {
          moeda && <Entrada placeholder={moeda} onChangeText={setValor} value={valor} />
          
        }
        <Btn onPress={() => {control.definirMoedaValor(valor); control.definirMoedaTipo(moeda); setResultado(control.calcularConversao())}} label='Converter'></Btn >
        <Resp resp = {resultado}></Resp>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b7d5ac',
    alignItems: 'center',
    marginTop: 300,
    margin: 10,
    borderRadius: 40,
    padding: 10,
   paddingBlock: 30,
   marginBlock: 50,
    
  },
  bts:{
    flexDirection: 'row',
    flexWrap:'wrap',
    margin:8,
    borderRadius:100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

