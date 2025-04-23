import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ButtonComponent({ text, onPress }) {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: " rgb(250, 138, 52)",
    width: 343,
    height: 48,
    padding: 10,
    borderRadius: 16,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  buttonWrapper: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
});
