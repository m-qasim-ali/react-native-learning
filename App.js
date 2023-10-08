import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GroupDataList from "./GroupData.json";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Switch
        value={isDark}
        onValueChange={setIsDark}
        trackColor={{ false: "red", true: "green" }}
        thumbColor={"blue"}
      />
      <Text style={{ fontWeight: "bold" }}>
        Is Dark: {isDark ? "true" : "false"}
      </Text>
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
});
