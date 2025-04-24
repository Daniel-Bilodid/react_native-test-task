import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import ButtonComponent from "../../ui/ButtonComponent";

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
            <Image
              style={styles.postImg}
              source={require("../../assets/postImg.png")}
            />
          </View>
        </View>

        <View style={styles.about}>
          <Text style={styles.aboutTitle}>About</Text>
          <View style={styles.aboutTextWrapper}>
            <Text style={styles.aboutText}>What is Lorem Ipsum?</Text>
            <Text style={styles.aboutText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley{" "}
            </Text>
          </View>
        </View>

        <View style={styles.comments}>
          <Text style={styles.commentsTitle}>Comments</Text>
          <View style={styles.commentsWrapper}>
            <View style={styles.commentsCard}>
              <Text style={styles.commentsCardName}>Egor</Text>
              <Text style={styles.commentsCardEmail}>johndoe@test.com</Text>
              <Text style={styles.commentsCardText}>
                The investment objective is the highest possible increase in
                value. The fund is composed of at least 2/3 of securities and
                investment units of the gold sector. These include securities
                linked to the development of the price of gold{" "}
              </Text>
            </View>

            <View style={styles.commentsCard}>
              <Text style={styles.commentsCardName}>Egor</Text>
              <Text style={styles.commentsCardEmail}>johndoe@test.com</Text>
              <Text style={styles.commentsCardText}>
                The investment objective is the highest possible increase in
                value. The fund is composed of at least 2/3 of securities and
                investment units of the gold sector. These include securities
                linked to the development of the price of gold{" "}
              </Text>
            </View>

            <View style={styles.commentsCard}>
              <Text style={styles.commentsCardName}>Egor</Text>
              <Text style={styles.commentsCardEmail}>johndoe@test.com</Text>
              <Text style={styles.commentsCardText}>
                The investment objective is the highest possible increase in
                value. The fund is composed of at least 2/3 of securities and
                investment units of the gold sector. These include securities
                linked to the development of the price of gold{" "}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.postButtonWrapper}>
        <ButtonComponent text="Back" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postHeader: {
    position: "relative",
    height: 480,
    borderRadius: 28,
    overflow: "hidden",
    backgroundColor: "rgb(255, 255, 255)",
    justifyContent: "flex-end",
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
    fontSize: 28,
    fontWeight: "600",
    color: "rgb(6, 7, 10)",
    fontWeight: 700,
    lineHeight: 32,
  },
  titleWrapper: {
    flexDirection: "column",

    alignItems: "center",
  },
  postImg: {
    marginBottom: 27,
    marginTop: 42,
  },
  about: {
    marginTop: 24,
    marginLeft: 16,
    marginRight: 16,
  },
  aboutTitle: {
    color: "rgb(96, 103, 115)",
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 16,
  },
  aboutTextWrapper: {
    marginTop: 8,
    width: "100%",
    height: 240,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 16,
    padding: 24,
  },
  aboutText: {
    color: "rgb(6, 7, 10)",
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 32,
  },

  comments: {
    marginTop: 48,
    marginLeft: 16,
    marginRight: 16,
    paddingBottom: 20,
  },
  commentsWrapper: {
    gap: 12,
  },
  commentsTitle: {
    color: "rgb(96, 103, 115)",
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 16,
    marginBottom: 8,
  },
  commentsCardWrapper: {
    gap: 12,
  },
  commentsCard: {
    width: "100%",
    padding: 12,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 16,
  },
  commentsCardName: {
    color: "rgb(0, 0, 0)",
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 24,
  },
  commentsCardEmail: {
    marginTop: 2,
    color: "rgb(6, 7, 10)",
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 24,
  },
  commentsCardText: {
    marginTop: 12,
    color: "rgb(6, 7, 10)",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 19,
  },
  postButtonWrapper: {
    width: "100%",
    height: 98,
    backgroundColor: "rgb(255, 255, 255)",
  },
});
