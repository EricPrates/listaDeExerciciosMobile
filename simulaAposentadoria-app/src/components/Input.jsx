import { Text, TextInput } from "react-native"
import { useState } from "react"
import { StyleSheet } from "react-native";
export default function Input({ onChangeText, placeholder, children, keyboardType }) {
    const [erro, setErro] = useState(false);

    function validacao() {
        if (onChangeText === undefined || onChangeText === null || onChangeText === '') {
            setErro(true);
        } else {
            setErro(false);
        }
    }

    return (
        
        <TextInput
            onChangeText={text => {
                onChangeText(text);
            }}
            placeholder={placeholder}
            style={[{
                backgroundColor: '#fff',
                padding: 10,
                borderRadius: 5,
                marginVertical: 5,
                width: '60%',
                textAlign: 'center'
            }, erro ? { borderColor: '#f00', borderWidth: 2 } : {}]}
            onBlur={() => validacao() }
            keyboardType={keyboardType}
        />
    )
}
