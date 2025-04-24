import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function PostsComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.postsTitle}>Posts</Text>

      <View style={styles.postsWrapper}>
        <View style={styles.postsCard}>
          <Text style={styles.postsCardTitle}>How to take shower?</Text>
          <Text style={styles.postsCardDescr}>
            The weather outside is lovely today, isn't it? I can't wait to take
            a stroll through the park.
          </Text>
        </View>
        <View style={styles.postsCard}>
          <Text style={styles.postsCardTitle}>How to take shower?</Text>
          <Text style={styles.postsCardDescr}>
            The weather outside is lovely today, isn't it? I can't wait to take
            a stroll through the park.
          </Text>
        </View>
        <View style={styles.postsCard}>
          <Text style={styles.postsCardTitle}>How to take shower?</Text>
          <Text style={styles.postsCardDescr}>
            The weather outside is lovely today, isn't it? I can't wait to take
            a stroll through the park.
          </Text>
        </View>
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
    height: 111,
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
