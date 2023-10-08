import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GroupDataList from "./GroupData.json";

export default function App() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        // secureTextEntry={true}
        autoCorrect={true}
        autoComplete="username"
        autoCapitalize="words"
        keyboardType="default"
        placeholder="Enter your name"
      />
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="message"
        multiline
      />
      <Text style={{ fontWeight: "bold" }}>My name: {name}</Text>
      <StatusBar backgroundColor="red" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5f",
    paddingTop: Platform.OS === "android" ? 50 : 0,
    paddingHorizontal: Platform.OS === "android" ? 10 : 0,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  multiline: {
    height: 100,
    textAlignVertical: "top",
  },
});
