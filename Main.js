import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomePage from "./components/welcomePage/WelcomePage";
import SignUpComponent from "./components/signUpComponent/SignUpComponent";
import SignInComponent from "./components/signInComponent/SignInComponent";
import PinCodeScreen from "./components/pinCode/PinCode";
import HomePage from "./components/homePage/HomePage";
import PostPage from "./components/postPage/PostPage";
import PostSearchPage from "./components/postSearchPage/PostSearchPage";
import ProfilePage from "./components/profilePage/ProfilePage";
import LanguagePage from "./components/languagePage/LanguagePage";

const Stack = createNativeStackNavigator();

export default function Main() {
  const { i18n } = useTranslation();
  const lang = useSelector((state) => state.settings.language);
  const { token, pinSet } = useSelector((state) => state.auth);

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

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
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="Language" component={LanguagePage} />
    </Stack.Navigator>
  );
}
