import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

const MenuButton = props => (
  <TouchableHighlight
    style={
      props.night ? styles.buttonContainerNight : styles.buttonContainerDay
    }
    onPress={() => {
      props.openMenu();
    }}
  >
    <Text style={props.night ? styles.menuButtonNight : styles.menuButtonDay}>
      ☰
    </Text>
  </TouchableHighlight>
);

export default MenuButton;

const styles = StyleSheet.create({
  buttonContainerDay: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 4,
    height: 38
  },
  buttonContainerNight: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 4,
    height: 38
  },
  menuButtonDay: {
    fontSize: 40,
    fontWeight: "200",
    textAlign: "center"
  },
  menuButtonNight: {
    fontSize: 40,
    fontWeight: "200",
    textAlign: "center",
    color: "white"
  }
});
