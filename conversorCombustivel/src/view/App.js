import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import appController from '../controller/appController';
import { use, useState } from 'react';
import Input from '../components/Input';
import Title from '../components/Title';
import Btn from '../components/Btn';



export default function App() {
const control = appController();
const [precoEtanol, setprecoEtanol] = useState();
const [precoGasolina, setprecoGasolina] = useState();


  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />
      <Title titulo = 'Conversor de Combustível'></Title>
      <KeyboardAvoidingView>

        <Input value = '' placeholder="Digite o consumo médio do veículo" label = 'Consumo médio do veículo'/>
        
        <Input value = '' placeholder="Digite aqui o preço da Gasolina" label = "Valor da gasolina" ChangeText={(onChangeText) => control.precoGasolina(value) }/>
        
        <Input value = '' placeholder="Digite aqui o preço do Etanol" label = "Valor do Etanol" ChangeText={(onChangeText) => control.precoEtanol(e)}/>
        <View style = {styles.container}>
            <Btn label = 
            'Custo por KM'></Btn>
            <Btn label = 'Custo por Distância' value = ''></Btn>
            <Btn label = 'Melhor opção'></Btn>
            <Btn label = 'Limpar'></Btn>

          </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap:'wrap'
      
  },
 
});
