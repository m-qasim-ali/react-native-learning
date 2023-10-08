import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Greet from "./components/Greet";
const uniImage = require("./assets/uni.jpg");

// there is no css inheritance in react native as in web, but inheritance from same type of components is possible as from text to text child component

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkBg}>
        <Text style={styles.textWhite}>Hello, world!</Text>
      </View>
      <StatusBar backgroundColor="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  darkBg: {
    backgroundColor: "black",
  },
  textWhite: {
    color: "white",
  },
  box: {
    width: 250,
    height: 250,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderStyle: "dotted",
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
