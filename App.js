import React from "react";
import { View, StyleSheet } from "react-native";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "./components/welcomePage/WelcomePage";
import SignUpComponent from "./components/signUpComponent/SignUpComponent";
import SignInComponent from "./components/signInComponent/SignInComponent";
import PinCodeScreen from "./components/pinCode/PinCode";
import HomePage from "./components/homePage/HomePage";
import PostPage from "./components/postPage/PostPage";
import InitAuth from "./components/InitAuth/InitAuth";
import PostSearchPage from "./components/postSearchPage/PostSearchPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <InitAuth>
          <View style={styles.container}>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </View>
        </InitAuth>
      </PersistGate>
    </Provider>
  );
}

function AppNavigator() {
  const { token, pinSet } = useSelector((state) => state.auth);

  if (!token) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="SignUp" component={SignUpComponent} />
        <Stack.Screen name="SignIn" component={SignInComponent} />
      </Stack.Navigator>
    );
  }

  if (!pinSet) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PinCode" component={PinCodeScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Post" component={PostPage} />
      <Stack.Screen name="PostSearch" component={PostSearchPage} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
