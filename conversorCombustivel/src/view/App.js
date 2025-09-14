import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import appController from '../controller/appController';
import { use, useState } from 'react';

import Input from '../components/Input';


export default function App() {
const control = appController();


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView>
        <Input placeholder="Digite seu nome" label = "nome" value={control.getNome()} onChangeText={(e) => control.setNome()}/>
        <Input placeholder="Digite aqui o preço da Gasolina" label = "Valor da gasolina" onChangeText={(e) => control.precoGasolina(e)}/>
        <Input placeholder="Digite aqui o preço do Etanol" label = "Valor do Etanol" onChangeText={(e) => control.setNome(e)}/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17bfc2ff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
    
  },
});
