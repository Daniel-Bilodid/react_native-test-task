import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import NavComponent from "../navComponent/NavComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/postSlice";
import { useTranslation } from "react-i18next";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function PostSearchPage({ navigation }) {
  const [text, setText] = useState("");
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  const filteredPosts = posts.filter((post) => {
    const query = text.toLowerCase();

    const idStr = post.id.toString();

    return post.title.toLowerCase().includes(query) || idStr.includes(query);
  });

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{t("search")}</Text>
        <View style={styles.searchWrapper}>
          <View style={styles.searchContainer}>
            <Icon
              name="magnify"
              size={24}
              color="gray"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              value={text}
              onChangeText={setText}
              placeholder={t("searchPostsPlaceholder")}
              placeholderTextColor="rgb(133, 140, 148)"
            />
          </View>

          <View style={styles.postList}>
            {filteredPosts.map((post) => (
              <View key={post.id} style={styles.postItem}>
                <Text style={styles.postItemID}>ID: {post.id}</Text>
                <Text style={styles.postItemName}>{post.title}</Text>
              </View>
            ))}
            {filteredPosts.length === 0 && (
              <Text style={styles.noResults}>No posts found.</Text>
            )}
          </View>
        </View>
      </ScrollView>
      <NavComponent navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 58,
    paddingHorizontal: 23,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "rgb(6, 7, 10)",
    lineHeight: 32,
  },
  searchWrapper: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgb(206, 213, 224)",
    borderRadius: 16,
    height: 56,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: "100%",
  },
  postList: {
    marginTop: 12,
    gap: 8,
    marginBottom: 100,
  },
  postItem: {
    width: "100%",
    borderRadius: 16,
    backgroundColor: "rgb(255, 255, 255)",
    padding: 16,
  },
  postItemID: {
    color: "rgb(6, 7, 10)",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 24,
  },
  postItemName: {
    color: "rgb(133, 140, 148)",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 16,
    marginTop: 4,
  },
  noResults: {
    marginTop: 16,
    color: "rgb(133, 140, 148)",
    fontStyle: "italic",
  },
});
