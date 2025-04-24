import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import NavComponent from "../navComponent/NavComponent";

export default function PostPage() {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.postHeader}>
          <TouchableOpacity style={styles.backButton} onPress={() => {}}>
            <Image
              style={styles.backIcon}
              source={require("../../assets/icons/arrowLeft.png")}
            />
          </TouchableOpacity>

          <View style={styles.titleWrapper}>
            <Text style={styles.postTitle}>Post name</Text>
          </View>
        </View>
      </ScrollView>
      <NavComponent />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postHeader: {
    position: "relative",
    height: 296,
    borderRadius: 28,
    overflow: "hidden",
    backgroundColor: "rgb(255, 255, 255)",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 48,
    left: 16,
    padding: 8,
    zIndex: 10,
  },

  titleWrapper: {
    alignItems: "center",
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "rgb(6, 7, 10)",
  },
});
