import React from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import PokemonCard from "./components/PokemonCard";
import { StatusBar } from "expo-status-bar";

const charmanderData = {
  name: "Charmander",
  image: require("./assets/pokemonImages/charmander.png"),
  type: "Fire",
  hp: 39,
  moves: ["Scratch", "Ember", "Growl", "Leer"],
  weaknesses: ["Water", "Rock"],
};

const squirtleData = {
  name: "Squirtle",
  image: require("./assets/pokemonImages/squirtle.png"), // Replace with the actual image path
  type: "Water",
  hp: 44,
  moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
  weaknesses: ["Electric", "Grass"],
};

const bulbasaurData = {
  name: "Bulbasaur",
  image: require("./assets/pokemonImages/bulbasaur.png"), // Replace with the actual image path
  type: "Grass",
  hp: 45,
  moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
};

const pikachuData = {
  name: "Pikachu",
  image: require("./assets/pokemonImages/pikachu.png"), // Replace with the actual image path
  type: "Electric",
  hp: 35,
  moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
  weaknesses: ["Ground"],
};

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
      <StatusBar backgroundColor="red" />
    </View>
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
