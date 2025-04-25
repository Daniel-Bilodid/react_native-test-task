import "./utils/i18n";

import React from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import InitAuth from "./components/InitAuth/InitAuth";
import { NavigationContainer } from "@react-navigation/native";
import MainApp from "./Main";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainApp />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
