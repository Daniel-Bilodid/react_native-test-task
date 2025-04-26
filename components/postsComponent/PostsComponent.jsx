import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useTranslation } from "react-i18next";

export default function PostsComponent({ posts, navigation }) {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.postsTitle}>{t("posts")}</Text>

      <View style={styles.postsWrapper}>
        {posts.slice(0, 3).map((post) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Post", { post })}
            key={post.id}
            style={styles.postsCard}
          >
            <Text style={styles.postsCardTitle}>{post.title}</Text>
            <Text style={styles.postsCardDescr}>{post.body}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
    paddingBottom: 100,
  },
  postsTitle: {
    color: "rgb(96, 103, 115)",
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 16,
  },
  postsWrapper: {
    marginTop: 8,
    gap: 8,
  },
  postsCard: {
    width: "100%",

    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 16,
    padding: 12,
  },
  postsCardTitle: {
    color: "rgb(23, 23, 24)",
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 22,
  },
  postsCardDescr: {
    color: "rgb(65, 65, 65)",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    marginTop: 8,
  },
});
