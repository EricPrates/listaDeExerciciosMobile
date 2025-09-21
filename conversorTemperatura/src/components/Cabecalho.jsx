import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
export default function Cabecalho({ valor }){
    return(
        <View style={styles.cabecalho}>
            <Text style={styles.cabecalhoText}>Conversor de Temperatura</Text>
            <Text style={styles.cabecalhoText}>Escolha a unidade de temperatura de origem: {valor}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    cabecalho: {
        backgroundColor: '#3708f3ff',
        padding: 10,
        borderRadius: 50,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column',
    },
    cabecalhoText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
