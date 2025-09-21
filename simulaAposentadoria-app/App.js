import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AposetadoriaController } from './src/controller/AposentadoriaController';
import Input from './src/components/Input';
import { useState } from 'react';
import { use } from 'react';
import Btn from './src/components/Btn';

export default function App() {
  const control = AposetadoriaController();
  const [erro, setErro] = useState(false);
  const [resultado, setResultado] =  useState(null);
  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
      <View style={{ width: '100%', alignItems: 'center', backgroundColor: '#1e5096ff', padding: 20, borderRadius: 10 }}>
        <Text style={styles.text}>Olá {control.pessoa.nome}</Text>
        <Text style={{ color: '#fff', fontSize: 16, padding: 10, fontWeight: 'bold' }}> Digite o seu nome</Text>
        <Input onChangeText={control.setNome} placeholder="Nome" value={control.pessoa.nome} keyboardType="default" />
        <Text style={{ color: '#fff', fontSize: 16, padding: 10, fontWeight: 'bold' }}> Digite a sua idade</Text>
        <Input onChangeText={control.setIdade} placeholder="Idade" value={control.pessoa.idade} keyboardType="numeric" />
        <Text style={{ color: '#fff', fontSize: 16, padding: 10, fontWeight: 'bold' }}> Digite o tempo de trabalho</Text>
        <Input onChangeText={control.setTempoTrabalho} placeholder="Tempo de Trabalho" value={control.pessoa.tempoTrabalho} keyboardType="numeric" />
        <Btn title="Verificar" onPress={ () => setResultado(control.verificarAposentadoria())} />
          {resultado && <Text style={[styles.text, { textAlign: 'center' }]}>{resultado}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ebefff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 10
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 30,
    textAlign: 'center'
  }
  
});
