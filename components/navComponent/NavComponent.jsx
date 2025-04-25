import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTranslation } from "react-i18next";

export default function NavComponent({ navigation }) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.navList}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.iconWrapper}
        >
          <Icon name="home-outline" size={28} />
          <Text>{t("navHome")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Portfolio")}
          style={styles.iconWrapper}
        >
          <Icon name="briefcase-outline" size={28} />
          <Text>{t("navPortfolio")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PostSearch")}
          style={styles.iconWrapper}
        >
          <Icon name="magnify" size={28} />
          <Text>{t("navSearch")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={styles.iconWrapper}
        >
          <Icon name="account-circle-outline" size={28} />
          <Text>{t("navProfile")}</Text>
        </TouchableOpacity>
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
