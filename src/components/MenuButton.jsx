import React from "react";
import { TouchableHighlight, Text } from "react-native";

const MenuButton = props => (
  <TouchableHighlight
    onPress={() => {
      alert("menu button pressed");
    }}
  >
    <Text>menu button here</Text>
  </TouchableHighlight>
);

export default MenuButton;
