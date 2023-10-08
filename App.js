import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Greet from "./components/Greet";
import CustomButton from "./components/CustomButton/CustomButton";
const uniImage = require("./assets/uni.jpg");

// its only work on ios devices

export default function App() {
  const { width, height } = useWindowDimensions();

  console.log("width: ", width, "height: ", height);

  return (
    <View style={styles.container}>
      <Text style={[styles.textColor, { fontSize: width > 360 ? 30 : 24 }]}>
        lorem ipsum dfsdfsdf sdf sd fsd f sdfsdfsd f sdf sd f sd fsd f sd fsd{" "}
      </Text>
      <CustomButton
        title="Press"
        onPress={() => Alert.alert("button clicked")}
      />
      <StatusBar backgroundColor="lightblue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "android" ? "lightblue" : "red",
  },
  ...Platform.select({
    android: {
      textColor: {
        color: "white",
      },
    },
    ios: {
      textColor: {
        color: "green",
      },
    },
  }),
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
