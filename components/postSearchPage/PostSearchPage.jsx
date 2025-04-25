import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import NavComponent from "../navComponent/NavComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/postSlice";

export default function PostSearchPage({ navigation }) {
  const [text, setText] = useState("");

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
        <Text style={styles.title}>Search</Text>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={text}
            onChangeText={setText}
            placeholder="Search Posts..."
          />

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
  searchInput: {
    width: "100%",
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    borderColor: "rgb(206, 213, 224)",
    marginTop: 16,
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
