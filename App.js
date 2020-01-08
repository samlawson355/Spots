import React from "react";
import { StyleSheet, Text, View } from "react-native";
import App2 from "./src/components/App.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start32 working on your app!</Text> */}
      <App2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
