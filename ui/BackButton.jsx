import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

export default function BackButton({ navigation, screen }) {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.navigate(screen)}
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
    marginTop: 56,
    marginLeft: 16,
    padding: 8,
    alignSelf: "flex-start",
    zIndex: 10,
  },
});
