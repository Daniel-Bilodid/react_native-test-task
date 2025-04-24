import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import * as SecureStore from "expo-secure-store";
import { store, persistor } from "./store/index";
import { setCredentials, setPin } from "./store/authSlice";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "./components/welcomePage/WelcomePage";
import SignUpComponent from "./components/signUpComponent/signUpComponent";
import SignInComponent from "./components/signInComponent/SignInComponent";
import PinCodeScreen from "./components/pinCode/PinCode";
import HomePage from "./components/homePage/HomePage";
import PostPage from "./components/postPage/PostPage";

const Stack = createNativeStackNavigator();

function InitAuth({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const creds = await SecureStore.getGenericPassword();
      if (creds) {
        if (creds.username === "PIN") dispatch(setPin());
        else dispatch(setCredentials({ user: null, token: creds.password }));
      }
    })();
  }, [dispatch]);
  return children;
}

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
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomePage}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUpComponent}
        />
        <Stack.Screen
          name="SignIn"
          options={{ headerShown: false }}
          component={SignInComponent}
        />
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
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomePage}
      />
      <Stack.Screen
        name="Post"
        options={{ headerShown: false }}
        component={PostPage}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
