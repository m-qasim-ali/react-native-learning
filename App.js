import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Greet from "./components/Greet";
const uniImage = require("./assets/uni.jpg");

// there is no css inheritance in react native as in web, but inheritance from same type of components is possible as from text to text child component

export default function App() {
  const { width, height } = useWindowDimensions();

  console.log("width: ", width, "height: ", height);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {" "}
      // its only work on ios devices
      <View style={styles.container}>
        <Text style={{ fontSize: width > 360 ? 30 : 24 }}>
          lorem ipsum dfsdfsdf sdf sd fsd f sdfsdfsd f sdf sd f sd fsd f sd fsd{" "}
        </Text>
        <StatusBar backgroundColor="lightblue" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  darkBg: {
    backgroundColor: "black",
  },
  textWhite: {
    color: "white",
  },
  box: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderStyle: "dotted",
    justifyContent: "center",
    alignItems: "center",
  },
  lightBlueBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "red", // work on both ios and android
    shadowOffset: { width: 10, height: 10 }, // work on ios only
    shadowOpacity: 1, // work on ios only
    shadowRadius: 20, // work on ios only
  },
  androidElevation: {
    elevation: 20, // work on android only
  },
});

{
  /* <View
        style={[
          styles.box,
          styles.lightBlueBg,
          styles.boxShadow,
          styles.androidElevation,
        ]}
      >
        <Text>Light Blue Box</Text>
      </View>
      <View
        style={[
          styles.box,
          styles.lightGreenBg,
          styles.boxShadow,
          styles.androidElevation,
        ]}
      >
        <Text>Light Green Box</Text>
      </View> */
}

{
  /* <View
  style={[
    styles.box,
    styles.lightBlueBg,
    styles.boxShadow,
    styles.androidElevation,
    {
      width: width > 360 ? "70%" : "90%",
      height: width > 360 ? 250 : 300,
    },
  ]}
>
  <Text style={{ fontSize: width > 360 ? 30 : 24 }}>Light Blue Box</Text>
</View>; */
}
