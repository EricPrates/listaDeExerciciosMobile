import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Button({ onPress, text,children }){
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        backgroundColor: '#bcf308ff',
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
});
