import React from "react";
import {
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import DataList from "./data.json";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DataList}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
          </View>
        )}
        ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              No Item Found
            </Text>
          </View>
        }
        ListHeaderComponent={
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Pokemon List
          </Text>
        }
        ListFooterComponent={
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 16,
            }}
          >
            End of List
          </Text>
        }
      />
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
  cardContainer: {
    padding: 8,
    backgroundColor: "white",
    borderWidth: 2,
  },
});
