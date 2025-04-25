import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import BackButton from "../../ui/BackButton";
import { useSelector } from "react-redux";
import NavComponent from "../navComponent/NavComponent";
import LogoutButtonComponent from "../logoutButtonComponent/LogoutButtonComponent";
import { useTranslation } from "react-i18next";

export default function ProfilePage({ navigation }) {
  const user = useSelector((state) => state.auth.user);
  const { t } = useTranslation();
  return (
    <>
      <View>
        <BackButton navigation={navigation} screen="Home" />
        <View style={styles.container}>
          <Text style={styles.settingsTitle}>{t("settings")}</Text>

          <View style={styles.settingsItemBody}>
            <View style={styles.settingsProfileImg}></View>
            <Text style={styles.settingsTitle}>
              {user.firstName}
              {user.lastName}
            </Text>
          </View>
          <Text style={styles.settingsBasic}>{t("basic")}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Language")}
            style={styles.settingsSettingBody}
          >
            <View style={styles.settingsWrapper}>
              <Image source={require("../../assets/icons/globe.png")} />
              <Text style={styles.settingsTitle}>{t("Language")}</Text>
            </View>
            <Image source={require("../../assets/icons/arrowRightGray.png")} />
          </TouchableOpacity>
          <Text style={styles.settingsOther}>{t("other")}</Text>
          <LogoutButtonComponent />
        </View>
      </View>
      <NavComponent navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  settingsTitle: {
    color: "rgb(6, 7, 10)",
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 32,
  },

  settingsItemBody: {
    width: "100%",
    height: 80,
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1,

    paddingLeft: 15.5,

    flexDirection: "row",

    alignItems: "center",
    gap: 13.5,
    borderColor: "rgb(206, 213, 224)",
  },
  settingsProfileImg: {
    width: 32,
    height: 32,
    backgroundColor: "rgb(235, 239, 245)",
    borderRadius: 20,
  },
  settingsTitle: {
    color: "rgb(6, 7, 10)",
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 24,
  },
  settingsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

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
  settingsBasic: {
    marginTop: 32,
  },
  settingsOther: {
    marginTop: 32,
  },
});
