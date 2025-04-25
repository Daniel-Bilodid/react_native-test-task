import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

export default function BackButton({ navigation, navigator }) {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.navigate({ navigator })}
    >
      <Image
        style={styles.backIcon}
        source={require("../assets/icons/arrowLeft.png")}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 48,
    left: 16,
    padding: 8,
    zIndex: 10,
  },
});
