import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ActivityIndicator,
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
const uniImage = require("./assets/uni.jpg");

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <ActivityIndicator size={"small"} />
      <ActivityIndicator size={"large"} color={"midnightblue"} />
      <ActivityIndicator animating={isLoading} />
      <Button title="Load Data" onPress={() => setIsLoading(true)} />
      <StatusBar backgroundColor="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 20,
    marginTop: 50,
  },
});
