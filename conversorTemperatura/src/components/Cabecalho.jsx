import { View, Text } from "react-native";

export default function Cabecalho({ valor }){
    return(
        <View>
            <Text>Conversor de Temperatura</Text>
            <Text>Escolha a unidade de temperatura de origem: {valor}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    cabecalho: {
        backgroundColor: '#3708f3ff',
        padding: 10,
    },
    cabecalhoText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
