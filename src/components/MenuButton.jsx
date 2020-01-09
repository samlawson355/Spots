import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

const MenuButton = props => (
  <TouchableHighlight
    style={styles.buttonContainer}
    onPress={() => {
      props.openMenu();
    }}
  >
    <Text>
      <Text style={styles.menuButton}>☰</Text>
    </Text>
  </TouchableHighlight>
);

export default MenuButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 4,
    height: 38
  },
  menuButton: {
    fontSize: 40,
    fontWeight: "200",
    textAlign: "center"
  }
});
