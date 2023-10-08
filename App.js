import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
const uniImage = require("./assets/uni.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world.</Text>
      <Image style={{ width: 200, height: 200 }} source={uniImage} />
      <ImageBackground source={require("./assets/uni.jpg")}>
        <Text>
          Insidefff
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
