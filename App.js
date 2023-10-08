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

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.lightBlueBox}>
        <Text>Light Blue Box</Text>
      </View>
      <View style={styles.lightGreenBox}>
        <Text>Light Green Box</Text>
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
  lightBlueBox: {
    backgroundColor: "lightblue",
    width: 100,
    height: 100,
    padding: 20,
  },
  lightGreenBox: {
    backgroundColor: "lightgreen",
    width: 100,
    height: 100,
    margin: 20,
  },
});
