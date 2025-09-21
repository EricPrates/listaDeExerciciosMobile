import { TouchableOpacity, Text} from "react-native";
import { StyleSheet } from "react-native";

export default function Btn({ onPress, title }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ffffffff',
        padding: 10,
        borderRadius: 80,
        margin: 10,
        marginTop: 30,
        width: '60%'
    },
    buttonText: {
        color: '#000000ff',
        textAlign: 'center'
    }
})

          