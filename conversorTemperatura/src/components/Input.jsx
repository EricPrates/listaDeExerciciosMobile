import { TextInput,  } from "react-native";

export default function Input({ placeholder, onChangeText, validacao }){
    const [valor, setValor] = useState(0);
    const [erro, setErro] = useState(false);

    return(
        <TextInput style={[styles.input, {borderColor: erro ? 'red' : '#ccc', borderWidth: 1}]}
            keyboardType="numeric"
            placeholder={placeholder}
            onBlur={() => { const resultado = validacao(valor)
                if(!resultado){
                    setErro(true);

                }
             }}
            onChangeText={(e) => { setValor(e) }}
        >

        </TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        width: '100%',
    },
});
