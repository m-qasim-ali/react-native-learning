import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
const uniImage = require("./assets/uni.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="click"
        color="red"
        onPress={() => console.log("Button pressed")}
      />
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
