import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTranslation } from "react-i18next";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function NavComponent() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const route = useRoute();
  const currentRoute = route.name;

  const tabs = [
    { name: "Home", icon: "home-outline", label: t("navHome") },
    { name: "Portfolio", icon: "briefcase-outline", label: t("navPortfolio") },
    { name: "PostSearch", icon: "magnify", label: t("navSearch") },
    { name: "Profile", icon: "account-circle-outline", label: t("navProfile") },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navList}>
        {tabs.map((tab) => {
          const isFocused =
            currentRoute === tab.name ||
            (tab.name === "Profile" && currentRoute === "Language");
          const isLanguagePage =
            currentRoute === "Language" && tab.name === "Profile";
          const color = isFocused ? "rgb(250, 138, 52)" : "gray";
          const iconName = isLanguagePage ? "cog-outline" : tab.icon;

          return (
            <TouchableOpacity
              key={tab.name}
              onPress={() => navigation.navigate(tab.name)}
              style={styles.iconWrapper}
            >
              <Icon name={iconName} size={28} color={color} />
              <Text style={{ color, marginTop: 4 }}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 83,
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
  },
  navList: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    paddingBottom: 20,
  },
  iconWrapper: {
    flex: 1,
    alignItems: "center",
  },
});
