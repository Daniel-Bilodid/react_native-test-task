import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import WelcomePage from "./components/welcomePage/WelcomePage";
import SignUpComponent from "./components/signUpComponent/signUpComponent";
import SignInComponent from "./components/signInComponent/SignInComponent";
import HomePage from "./components/homePage/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage />
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInComponent}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(242, 243, 245)",

    zIndex: 1,
  },
});
