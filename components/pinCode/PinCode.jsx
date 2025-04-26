import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  StyleSheet,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { useDispatch, useSelector } from "react-redux";
import { setPin } from "../../store/authSlice";
import ButtonComponent from "../../ui/ButtonComponent";
import { useTranslation } from "react-i18next";

export default function PinCodeScreen() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [hasPin, setHasPin] = useState(null);
  const [pin, setPinState] = useState([]);

  useEffect(() => {
    (async () => {
      const storedPin = await SecureStore.getItemAsync("PIN");
      setHasPin(!!storedPin);
    })();
  }, []);

  const handleCompletePin = async (value) => {
    if (hasPin) {
      const storedPin = await SecureStore.getItemAsync("PIN");
      if (value === storedPin) {
        dispatch(setPin(true));
      } else {
        Alert.alert("Invalid PIN", "The PIN you entered is incorrect.");
        setPinState([]);
      }
    } else {
      await SecureStore.setItemAsync("PIN", value);
      dispatch(setPin(true));
    }
  };

  const onPressKey = (digit) => {
    if (pin.length < 5) setPinState((prev) => [...prev, digit]);
  };

  const onBackspace = () => {
    if (pin.length > 0) setPinState((prev) => prev.slice(0, -1));
  };

  if (hasPin === null) return null;

  return (
    <View style={styles.container}>
      {hasPin && user && (
        <View style={styles.userInfo}>
          <View style={styles.userTitleIcon}>
            <Image source={require("../../assets/icons/profileLogin.png")} />
          </View>
          <Text style={styles.emailText}>{user.email}</Text>
          <TouchableOpacity onPress={() => Alert.alert("Change account")}>
            <Text style={styles.changeAccount}>{t("changeAccount")}</Text>
          </TouchableOpacity>
        </View>
      )}
      {!hasPin && (
        <View style={styles.userInfo}>
          <View style={styles.userTitleIcon}>
            <Image source={require("../../assets/icons/phone.png")} />
          </View>
          <Text style={styles.createPinCode}>Create a Pin code</Text>
        </View>
      )}
      <Text style={styles.title}>
        {hasPin ? "Enter a 5 digit PIN" : "Set a 5 digit PIN"}
      </Text>
      <View style={styles.pinDisplay}>
        {Array.from({ length: 5 }).map((_, i) => (
          <View
            key={i}
            style={[styles.dot, pin.length > i ? styles.filledDot : null]}
          />
        ))}
      </View>

      <View style={styles.keypad}>
        {[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "back",
          "0",
          "clear",
        ].map((key) => (
          <TouchableOpacity
            key={key}
            style={styles.key}
            onPress={() => {
              if (key === "back") onBackspace();
              else if (key === "clear") setPinState([]);
              else onPressKey(key);
            }}
          >
            <Text style={styles.keyText}>
              {key === "back" ? "⌫" : key === "clear" ? "C" : key}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonWrapper}>
        <ButtonComponent
          text={"Continue"}
          onPress={() => handleCompletePin(pin.join(""))}
          disabled={pin.length !== 6}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  userInfo: {
    paddingTop: 73,
    alignItems: "center",
  },
  emailText: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 8,
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 24,
  },
  changeAccount: {
    color: "rgb(250, 138, 52)",
    marginTop: 4,
    marginTop: 7,
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 16,
    marginBottom: 33,
  },
  title: {
    color: "rgb(133, 140, 148)",
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 16,
  },
  pinDisplay: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginBottom: 120,
    marginTop: 16,
  },
  dot: {
    width: 24,
    height: 24,
    borderRadius: 100,

    backgroundColor: "rgb(193, 196, 203)",
  },
  filledDot: {
    backgroundColor: "rgb(250, 138, 52)",
  },
  keypad: {
    width: "80%",
    marginBottom: -100,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-between",
  },

  key: {
    width: "33.33%",
    aspectRatio: 1,
    marginVertical: 10,

    justifyContent: "center",
    alignItems: "center",
  },

  keyText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userTitleIcon: {
    width: 48,
    height: 51,
    borderRadius: 100,
    backgroundColor: " rgb(242, 250, 247)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    width: "100%",
    height: 98,
    marginBottom: 20,
  },
  createPinCode: {
    color: "rgb(6, 7, 10)",
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 24,
    marginTop: 8,
    marginBottom: 38,
  },
});
