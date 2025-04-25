import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../ui/BackButton";
import NavComponent from "../navComponent/NavComponent";
import { setLanguage } from "../../store/settingsSlice";

export default function LanguagePage({ navigation }) {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  // Читаем язык из Redux
  const lang = useSelector((state) => state.settings.language);

  // При первом рендере ставим i18n в значение из стора
  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // Обработчик переключения
  const onSelect = (lng) => {
    // Сначала меняем i18n
    i18n.changeLanguage(lng);
    // А потом сохраняем в Redux
    dispatch(setLanguage(lng));
  };

  return (
    <>
      <View style={styles.container}>
        <BackButton navigation={navigation} screen="Profile" />

        <Text style={styles.languageTitle}>{t("Language")}</Text>

        <TouchableOpacity
          style={styles.languageBody}
          onPress={() => onSelect("en")}
        >
          <View style={styles.languageWrapper}>
            <View
              style={[styles.checkbox, lang === "en" && styles.checkedBox]}
            />
            <Text style={styles.languageItemTitle}>{t("English")}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.languageBody}
          onPress={() => onSelect("ar")}
        >
          <View style={styles.languageWrapper}>
            <View
              style={[styles.checkbox, lang === "ar" && styles.checkedBox]}
            />
            <Text style={styles.languageItemTitle}>{t("Arabic")}</Text>
          </View>
        </TouchableOpacity>
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
    gap: 10,
  },
  languageItemTitle: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 24,
    color: "rgb(6, 7, 10)",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "rgb(206, 213, 224)",
    backgroundColor: "transparent",
  },
  checkedBox: {
    backgroundColor: "rgb(250, 138, 52)",
    borderColor: "rgb(250, 138, 52)",
  },
});
