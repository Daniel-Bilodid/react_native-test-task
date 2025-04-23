import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import ButtonComponent from "../../ui/ButtonComponent";

export default function WelcomePage() {
  return (
    <>
      <View style={styles.imgWrapper}>
        <View>
          <Image
            style={styles.logoImg}
            source={require("../../assets/splash-icon.png")}
          />

          <View style={styles.iconItem}>
            <Image source={require("../../assets/icons/top.png")} />
            <Text style={styles.iconText}>Lorem ipsum</Text>
          </View>
          <View style={styles.iconItem}>
            <Image source={require("../../assets/icons/group2.png")} />
            <Text style={styles.iconText}>Lorem ipsum 2</Text>
          </View>
        </View>

        <View style={{ marginTop: 74 }}>
          <View style={styles.iconItem}>
            <Image source={require("../../assets/icons/top.png")} />
            <Text style={styles.iconText}>Lorem ipsum 3</Text>
          </View>

          <View style={styles.iconItem}>
            <Image source={require("../../assets/icons/group4.png")} />
            <Text style={styles.iconText}>Lorem ipsum 4</Text>
          </View>
          <View style={styles.iconItem}>
            <Image source={require("../../assets/icons/group5.png")} />
            <Text style={styles.iconText}>Lorem ipsum 5</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttons}>
        <Button title="Sign In" color="rgb(250, 138, 52);" /> // need to add
        styles here
        <ButtonComponent text="Sign Up" />
      </View>
      <View style={styles.background}>
        <Image
          style={styles.bgImg}
          source={require("../../assets/bgWelcome.png")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imgWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    zIndex: 3,
  },
  logoImg: {
    width: 164,
    height: 136,
    borderRadius: 16,
    marginTop: 20,
  },
  iconItem: {
    width: 164,
    height: 136,
    borderRadius: 16,
    backgroundColor: "#fff",
    display: "flex",
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    justifyContent: "center",

    marginTop: 150,
    zIndex: 3,
  },
  background: {
    position: "absolute",
    bottom: 0,

    zIndex: 2,
  },
  iconText: {
    marginTop: 8,
    color: "rgb(96, 103, 115)",
    fontSize: 12,
  },
});
