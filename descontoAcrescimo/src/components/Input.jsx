import { TextInput, StyleSheet } from "react-native";

export default function Input({ placeholder, onChangeText, value, children = '' }) {
    return (
        value == 0 && <TextInput style={styles.input} placeholder={placeholder} keyboardType="numeric" onChangeText={onChangeText} childdren={children} value={value}>
        </TextInput>
        || <TextInput style={styles.input} placeholder={placeholder} keyboardType="numeric" onChangeText={onChangeText} value={value}></TextInput>
    )
    
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderBlockColor: '#000000',
        backgroundColor: '#ffffff'
      },
})