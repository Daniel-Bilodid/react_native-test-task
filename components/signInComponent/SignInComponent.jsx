import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import ButtonComponent from "../../ui/ButtonComponent";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/authSlice";
import { loginUser } from "../../api/auth";

export default function SignInComponent({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" } });
  const dispatch = useDispatch();

  async function onSubmit({ email, password }) {
    console.log("🔥 onSubmit called with", email, password);
    try {
      const username = email.split("@")[0];

      const { data: res } = await loginUser({ username, password });
      console.log("✅ API login response:", res);

      await SecureStore.setItemAsync("userId", res.id.toString());
      await SecureStore.setItemAsync("token", res.accessToken);

      dispatch(setCredentials({ user: res, token: res.accessToken }));
      navigation.replace("PinCode");
    } catch (e) {
      console.log("⚠️ Ошибка логина", e);
      Alert.alert("Ошибка логина", e.message);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
          <Image
            style={styles.arrowIcon}
            source={require("../../assets/icons/arrowLeft.png")}
          />
        </TouchableOpacity>
        <View style={styles.modal}>
          <View style={styles.modalTitle}>
            <View style={styles.modalTitleIcon}>
              <Image source={require("../../assets/icons/profileLogin.png")} />
            </View>
            <View>
              <Text style={styles.signUpTitle}>Login</Text>
              <Text style={styles.signUpText}>Personal Account</Text>
            </View>
          </View>

          <View style={styles.divider}></View>

          {/* Email */}
          <Text style={styles.inputLabel}>Email</Text>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email required",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "Invalid email format",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  {
                    borderColor: errors.email ? "red" : "rgb(206, 213, 224)",
                  },
                  styles.inputElement,
                ]}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.email && (
            <Text style={{ color: "red" }}>{errors.email.message}</Text>
          )}
          {/* Password */}
          <Text style={styles.inputLabel}>Password</Text>
          <Controller
            control={control}
            name="password"
            rules={{
              required: "Password required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputElementWrapper}>
                <TextInput
                  style={[
                    {
                      borderColor: errors.password
                        ? "red"
                        : "rgb(206, 213, 224)",
                    },
                    styles.inputElement,
                  ]}
                  placeholder="Enter your password"
                  secureTextEntry={!showPassword}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                <TouchableOpacity
                  style={styles.inputElementIcon}
                  onPress={() => setShowPassword((prev) => !prev)}
                >
                  <Icon
                    name={showPassword ? "eye" : "eye-off"}
                    size={24}
                    color="rgb(250, 138, 52)"
                  />
                </TouchableOpacity>
              </View>
            )}
          />

          {errors.password && (
            <Text style={{ color: "red" }}>{errors.password.message}</Text>
          )}

          <View style={{ marginTop: 20 }}>
            <ButtonComponent text="Continue" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  arrowIcon: {
    marginLeft: 17,
    marginTop: 28,
  },
  signUpTitle: {
    color: "rgb(6, 7, 10)",
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 24,
  },
  signUpText: {
    color: "rgb(96, 103, 115)",
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 24,
  },
  modal: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderRadius: 27,
    marginTop: 37,

    paddingTop: 20,
  },
  modalTitleIcon: {
    width: 48,
    height: 51,
    borderRadius: 100,
    backgroundColor: " rgb(242, 250, 247)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginLeft: 16,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "rgb(235, 239, 245)",
    marginTop: 20,
  },
  inputLabel: {
    color: "rgb(96, 103, 115)",
    fontSize: 15,
    lineHeight: 24,
    marginTop: 24,
    marginLeft: 16,
    marginBottom: 5,
  },
  inputElement: {
    borderWidth: 1,

    borderRadius: 16,
    padding: 20,
  },
  inputElementWrapper: {
    position: "relative",
  },
  inputElementIcon: {
    position: "absolute",
    top: 16,
    right: 16,
  },
});
