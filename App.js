import { StatusBar } from "expo-status-bar";
import {
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
      <ScrollView>
        <Text>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
          consequat nisl tortor quis velit. Donec euismod, neque nec ultricies
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
          consequat nisl tortor quis velit. Donec euismod, neque nec ultricies
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
          consequat nisl tortor quis velit. Donec euismod, neque nec ultricies
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
          consequat nisl tortor quis velit. Donec euismod, neque nec ultricies
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, quam eu aliquet tincidunt, diam elit commodo augue,
          egetlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
          consequat nisl tortor quis velit. Donec euismod, neque nec ultricies
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
          consequat nisl tortor quis velit. Donec euismod, neque nec ultricies
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, quam eu aliquet tincidunt, diam elit commodo augue,
          egetlorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
          consequat nisl tortor quis velit. Donec euismod, neque nec ultricies
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
          consequat nisl tortor quis velit. Donec euismod, neque nec ultricies
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
        </Text>
        <Image style={{ width: 200, height: 200 }} source={uniImage} />
        <ImageBackground
          style={{ width: 200, height: 200 }}
          source={require("./assets/uni.jpg")}
        >
          <Text>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
            consequat nisl tortor quis velit. Donec euismod, neque nec ultricies
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
            consequat nisl tortor quis velit. Donec euismod, neque nec ultricies
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
            consequat nisl tortor quis velit. Donec euismod, neque nec ultricies
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
            consequat nisl tortor quis velit. Donec euismod, neque nec ultricies
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
            consequat nisl tortor quis velit. Donec euismod, neque nec ultricies
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
            consequat nisl tortor quis velit. Donec euismod, neque nec ultricies
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt, quam eu aliquet tincidunt, diam elit commodo augue, eget
          </Text>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
