import React from "react";
import { Text, StyleSheet } from "react-native";

const InputError = props => (
  <Text style={props.night ? styles.errorTextNight : styles.errorTextDay}>
    {props.error}
  </Text>
);
const styles = StyleSheet.create({
  errorTextDay: {
    color: "black",
    fontSize: 20
  },
  errorTextNight: {
    color: "white",
    fontSize: 20
  }
});
export default InputError;
