import { TextInput,  } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
export default function Input({ placeholder, onChangeText, validacao }){
    const [valor, setValor] = useState(0);
    const [erro, setErro] = useState(false);

    return(
        <TextInput style={[styles.input, {borderColor: erro ? '#f60808ff' : '#ccc', borderWidth: 1}]}
            keyboardType="numeric"
            placeholder={placeholder}
            onBlur={() => { const resultado = validacao(valor)
                if(!resultado){
                    setErro(true);

                }
             }}
            onChangeText={(e) => { setValor(e); onChangeText(e) }}
        >

        </TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: '#4120e7ff',
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        width: '50%',
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 5,
    },
});
