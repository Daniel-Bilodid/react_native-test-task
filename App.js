import React from "react";

import { StyleSheet, Text, View } from "react-native";

import SignUpComponent from "./components/signUpComponent/signUpComponent";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomePage /> */}
      <SignUpComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(242, 243, 245)",
    paddingTop: 50,
    zIndex: 1,
  },
});
