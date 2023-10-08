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
const uniImage = require("./assets/uni.jpg");

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.container}>
      <Button
        title="Alert1"
        onPress={() =>
          Alert.alert("Invalid Data", "DOB Incorrect", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
            {
              text: "OK",
              onPress: () => console.log("OK Pressed"),
            },
          ])
        }
      />
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
