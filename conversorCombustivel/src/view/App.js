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
import Resp from '../components/resp';



export default function App() {
const control = appController();

const [error, setError] = useState (false);


  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />
      <Title titulo = 'Conversor de Combustível'></Title>
      <KeyboardAvoidingView>

        <Input value = {control.consumoMedio} placeholder="Digite o consumo médio do veículo" label = 'Consumo médio do veículo' onChangeText= {
          (e) => {
            control.setConsumoMedio(e)
            
          }}/>
        
        <Input value = {control.gasolina} placeholder="Digite aqui o preço da Gasolina" label = "Valor da gasolina" onChangeText= {
          (e) => {
            control.setPrecoGasolina(e)
            
          }
        }/>
        <Input value = {control.distancia} placeholder="Digite aqui a Distância" label = "distância" onChangeText= {
          (e) => {
            ser(e); 
            control.setDistanciaKm(e)
            
          }
        }/>
        
        <Input value = {control.etanol} placeholder="Digite aqui o preço do Etanol" label = "Valor do Etanol" onChangeText= {
          (e) => {
            
             control.setPrecoEtanol(e)
              
            }
            }/>
        <View style = {styles.container}>
              <Btn label = 'Custo por KM'></Btn>
              <Btn label = 'Custo por Distância' value = {[control.calculaPrecoDistanciaEtanol, control.calculaPrecoDistanciaGasolina]} onPress={ (e) => {
                control.calculaPrecoDistanciaEtanol();
                control.calculaPrecoDistanciaGasolina()}
                }></Btn>
              <Btn label = 'Melhor opção'></Btn>
              <Btn label = 'Custo KM gasolina' value = {control.calculaPrecoDistanciaGasolina()}></Btn>
              <Btn label = 'Custo KM etanol' value ={control.calculaPrecoDistanciaEtanol()}></Btn>
              <Btn label = 'Limpar' onPress={() =>{
                control.setClean(); 
                setprecoGasolina(''); 
                setprecoEtanol(''); 
                alert('Tela limpa')}}>
              </Btn>
            <Resp/>
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
