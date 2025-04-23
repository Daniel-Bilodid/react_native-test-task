import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your name</Text>
        <Text style={styles.headerTitleName}>Jhon doe</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  header: {
    width: "100%",
    height: 296,
    backgroundColor:
      "linear-gradient(-48.33deg, rgb(250, 138, 52) 0%,rgb(255, 111, 0) 93.492%),linear-gradient(-48.33deg, rgb(250, 138, 52) 0%,rgb(250, 138, 52) 93.492%),linear-gradient(134.70deg, rgb(250, 138, 52) 2.436%,rgb(250, 138, 52) 99.029%),rgb(255, 255, 255)",
    borderRadius: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "rgb(255, 255, 255)",
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 16,
  },
  headerTitleName: {
    color: "rgb(255, 255, 255)",
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 32,
  },
});
