import { View, Text, StyleSheet } from "react-native";

export default function Resp({ resultado }) {
    if (resultado == null || resultado === undefined) {
        return <Text>Sem Resultado</Text>;
    }
    else{
        return (
            <View style={style.container}>
                <Text>Celsius : {resultado.celsius.toFixed(2)}</Text>
                <Text>Fahrenheit : {resultado.farenheit.toFixed(2)}</Text>
                <Text>Kelvin : {resultado.kelvin.toFixed(2)}</Text>
            </View>
        );
    }
}
const style =StyleSheet.create({  
        container: {
            padding: 10,
            borderColor: '#4fef10ff',
            borderWidth: 1,
            borderRadius: 5,
        
            width: '50%',
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
        }
    });
