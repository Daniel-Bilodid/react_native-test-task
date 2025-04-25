import "./utils/i18n";

import React from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import InitAuth from "./components/InitAuth/InitAuth";
import MainApp from "./Main";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <InitAuth>
          <View style={styles.container}>
            <MainApp />
          </View>
        </InitAuth>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
