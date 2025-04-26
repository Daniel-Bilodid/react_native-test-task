import "./utils/i18n";
import React from "react";
import { Text, TextInput } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import InitAuth from "./components/InitAuth/InitAuth";
import { NavigationContainer } from "@react-navigation/native";
import MainApp from "./Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = { fontFamily: "Inter_700Bold" };
  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.style = { fontFamily: "Inter_700Bold" };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <InitAuth>
            <MainApp />
          </InitAuth>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
