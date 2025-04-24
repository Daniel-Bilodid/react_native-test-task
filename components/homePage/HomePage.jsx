import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import NavComponent from "../navComponent/NavComponent";
import PostsComponent from "../postsComponent/PostsComponent";
import { useSelector } from "react-redux";

export default function HomePage() {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Your name</Text>
          <Text style={styles.headerTitleName}>
            {user.firstName}
            {user.lastName}
          </Text>
        </View>

        <View style={styles.task}>
          <View>
            <Text style={styles.taskTitle}>Test task</Text>
            <Text style={styles.taskDescr}>Lorem ipsum</Text>
            <View style={styles.taskButtonWrapper}>
              <Text style={styles.taskButton}>Go to call</Text>
              <Image
                style={styles.taskButtonArrow}
                source={require("../../assets/icons/arrowRight.png")}
              ></Image>
            </View>
          </View>
          <View>
            <Image
              style={styles.taskImg}
              source={require("../../assets/taskImg.png")}
            />
          </View>
        </View>

        <View style={styles.start}>
          <Text style={styles.startTitle}>Before you Start</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.startWrapper}
          >
            <View style={styles.startCard}>
              <View style={styles.startCardWrapper}>
                <View style={styles.iconWrapper}>
                  <View style={styles.circle} />
                  <Image
                    source={require("../../assets/icons/Eye.png")}
                    style={styles.startImg}
                  />
                </View>

                <Text style={styles.startDescr}>Link you Bank Account</Text>
              </View>

              <View style={styles.startBtnWrapper}>
                <Text style={styles.startText}>2 steps</Text>
                <Image
                  style={styles.arrowImg}
                  source={require("../../assets/icons/arrowDif.png")}
                />
              </View>
            </View>

            <View style={styles.startCard}>
              <View style={styles.startCardWrapper}>
                <View style={styles.iconWrapper}>
                  <View style={styles.circle} />
                  <Image
                    source={require("../../assets/icons/Eye.png")}
                    style={styles.startImg}
                  />
                </View>

                <Text style={styles.startDescr}>Link you Bank Account</Text>
              </View>

              <View style={styles.startBtnWrapper}>
                <Text style={styles.startText}>2 steps</Text>
                <Image
                  style={styles.arrowImg}
                  source={require("../../assets/icons/arrowDif.png")}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <PostsComponent />
      </ScrollView>
      <NavComponent />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
  },
  header: {
    width: "100%",
    height: 296,
    backgroundColor:
      "linear-gradient(-48.33deg, rgb(250, 138, 52) 0%,rgb(255, 111, 0) 93.492%),linear-gradient(-48.33deg, rgb(250, 138, 52) 0%,rgb(250, 138, 52) 93.492%),linear-gradient(134.70deg, rgb(250, 138, 52) 2.436%,rgb(250, 138, 52) 99.029%),rgb(255, 255, 255)",
    borderRadius: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "rgb(255, 255, 255)",
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 16,
  },
  headerTitleName: {
    color: "rgb(255, 255, 255)",
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 32,
    marginTop: 8,
  },
  task: {
    flexDirection: "row",
    gap: 55,
    justifyContent: "space-around",
    marginTop: 24,
    paddingLeft: 24,
    width: "90%",
    height: 144,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignSelf: "center",
  },
  taskTitle: {
    marginTop: 29,
    color: "rgb(6, 7, 10)",
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 18,
  },
  taskDescr: {
    marginTop: 4,
    color: "rgb(133, 140, 148)",
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 16,
  },
  taskButton: {
    marginTop: 24,
    color: "rgb(250, 138, 52)",
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 24,
  },
  taskButtonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 46,
  },
  taskButtonArrow: {
    marginTop: 25,
  },
  taskImg: {
    marginTop: 8,
  },
  start: {
    paddingLeft: 16,
  },
  startTitle: {
    color: "rgb(96, 103, 115)",
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 16,
    marginTop: 32,
  },
  startWrapper: {
    flexDirection: "row",
    gap: 16,
  },
  startCard: {
    width: 233,
    height: 152,
    marginTop: 8,
    backgroundColor: "rgb(99, 99, 99)",
    borderRadius: 16,
    zIndex: -2,
  },
  iconWrapper: {
    position: "relative",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    marginLeft: 16,
  },
  circle: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgb(250, 138, 52)",
    zIndex: -1,
  },
  startImg: {
    width: 24,
    height: 24,
    zIndex: 1,
  },
  startCardWrapper: {
    flexDirection: "row",

    alignItems: "center",
    gap: 12,
  },
  startDescr: {
    width: 133,
    height: 48,
    color: "rgb(255, 255, 255)",
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 24,
    marginTop: 22,
  },
  startBtnWrapper: {
    marginTop: 22,
    marginLeft: 24,
    marginRight: 16,
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
  },
  startText: {
    color: "rgb(255, 255, 255)",
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 24,
  },
});
