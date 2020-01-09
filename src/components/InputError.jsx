import React from "react";
import { Text, StyleSheet } from "react-native";

const InputError = props => <Text style={styles.errorText}>{props.error}</Text>;
const styles = StyleSheet.create({
  errorText: {
    color: "black",
    fontSize: 20
  }
});
export default InputError;
