import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import { clearAuth } from "../../store/authSlice";
import { persistor } from "../../store";

export default function LogoutButtonComponent({ navigation }) {
  const dispatch = useDispatch();

  const onLogout = async () => {
    try {
      await SecureStore.deleteItemAsync("userCredentials");
      await SecureStore.deleteItemAsync("PIN");

      dispatch(clearAuth());

      await persistor.purge();

      navigation.reset({
        index: 0,
        routes: [{ name: "Welcome" }],
      });
    } catch (e) {
      Alert.alert("Error", e.message);
    }
  };

  return (
    <TouchableOpacity style={styles.settingsSettingBody} onPress={onLogout}>
      <View style={styles.settingsWrapper}>
        <Image source={require("../../assets/icons/logout.png")} />
        <Text style={styles.settingsTitle}>Log Out</Text>
      </View>

      <Image source={require("../../assets/icons/arrowRightGray.png")} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  settingsSettingBody: {
    width: "100%",
    height: 56,
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1,

    paddingLeft: 15.5,
    paddingRight: 16,

    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",
    gap: 13.5,
    borderColor: "rgb(206, 213, 224)",
  },
  settingsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  settingsTitle: {
    color: "rgb(6, 7, 10)",
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 24,
  },
});
