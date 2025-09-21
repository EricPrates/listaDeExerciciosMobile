import { StyleSheet } from "react-native";
import { TouchableOpacity, Text } from "react-native";
export default function Btn({ onPress, children }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#ffffffff",
    padding: 12,
    borderRadius: 50,
    alignItems: "center",
    width: 100,
  },
  btnText: {
    color: "#0c0b0bff",
    fontSize: 16,
  },
});
