import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import { setPin } from "../../store/authSlice";

export default function PinCodeScreen({ navigation }) {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { pin: "" },
  });
  const dispatch = useDispatch();
  const pin = watch("pin");

  const onSubmit = async ({ pin }) => {
    // Сохраняем PIN в SecureStore
    await SecureStore.setItemAsync("PIN", pin);
    dispatch(setPin());
    navigation.replace("Home");
  };

  useEffect(() => {
    (async () => {
      const pin = await SecureStore.getItemAsync("PIN");
      if (pin) {
        dispatch(setPin());
        navigation.replace("Home");
      }
    })();
  }, [dispatch, navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Enter PIN</Text>
      <Controller
        control={control}
        name="pin"
        rules={{
          required: true,
          minLength: 6,
          maxLength: 6,
          pattern: /^[0-9]{6}$/,
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View style={[styles.inputWrapper, error && styles.errorBorder]}>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              maxLength={6}
            />
          </View>
        )}
      />
      <TouchableOpacity
        style={[styles.button, pin.length !== 6 && styles.buttonDisabled]}
        disabled={pin.length !== 6}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    marginBottom: 20,
    width: "100%",
  },
  input: {
    height: 40,
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: "#CCCCCC",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  errorBorder: {
    borderBottomColor: "red",
  },
});
