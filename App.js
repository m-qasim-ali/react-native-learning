import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
const uniImage = require("./assets/uni.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => console.log("Image pressed")}
        onPressIn={() => console.log("Image pressed In")}
        onPressOut={() => console.log("Image pressed Out")}
        onLongPress={() => console.log("Image Long pressed")}
      >
        <Image source={uniImage} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable onPress={() => console.log("text pressed")}>
        <Text style={{ fontSize: 30 }}>Welcome to React Native!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
