import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import NavComponent from "../navComponent/NavComponent";
import BackButton from "../../ui/BackButton";
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
  }, []);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Search</Text>

        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Products..."
          />

          <View>
            {posts.slice(0, 10).map((post) => (
              <View style={styles.postItem}>
                <Text style={styles.postItemID}>ID: {post.id}</Text>
                <Text style={styles.postItemName}>Name: {post.title}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
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
    padding: 20,
    borderColor: "rgb(206, 213, 224)",
    marginTop: 16,
  },
});
