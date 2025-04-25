import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BackButton from "../../ui/BackButton";
import NavComponent from "../navComponent/NavComponent";
import { setLanguage } from "../../store/settingsSlice";

export default function LanguagePage({ navigation }) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.settings.language);

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const onSelect = (lng) => {
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng));
  };

  const renderOption = (lng, label) => {
    const selected = lang === lng;
    return (
      <TouchableOpacity
        style={styles.languageBody}
        onPress={() => onSelect(lng)}
        key={lng}
      >
        <View style={styles.languageWrapper}>
          <View style={styles.languageTextWrapper}>
            <Image source={require("../../assets/icons/globe.png")} />
            <Text style={styles.languageItemTitle}>{t(label)}</Text>
          </View>
          <View style={[styles.checkbox, selected && styles.checkedBox]}>
            {selected && <Icon name="check" size={20} color="white" />}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <BackButton navigation={navigation} screen="Profile" />
        <Text style={styles.languageTitle}>{t("Language")}</Text>
        {renderOption("en", "English")}
        {renderOption("ar", "Arabic")}
      </View>
      <NavComponent navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  languageTitle: {
    marginTop: 32,
    fontSize: 22,
    fontWeight: "600",
    color: "rgb(6, 7, 10)",
    lineHeight: 32,
  },
  languageBody: {
    width: "100%",
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgb(206, 213, 224)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 16,
  },
  languageWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  languageTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  languageItemTitle: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 24,
    color: "rgb(6, 7, 10)",
  },
  checkbox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgb(206, 213, 224)",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  checkedBox: {
    backgroundColor: "rgb(250, 138, 52)",
    borderColor: "rgb(250, 138, 52)",
  },
});
