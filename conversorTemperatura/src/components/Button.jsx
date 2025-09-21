import { TouchableOpacity } from "react-native";


export default function Button({ onPress, text }){
    return(
        <TouchableOpacity onPress={onPress}>
            {text}
        </TouchableOpacity>
    )
}

const styles = {
    button: {
        backgroundColor: '#007BFF',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
}
