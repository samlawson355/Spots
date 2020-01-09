import React from "react";
import { TouchableHighlight, Text } from "react-native";

const MenuButton = props => (
  <TouchableHighlight
    onPress={() => {
      props.openMenu();
    }}
  >
    <Text>menu button here</Text>
  </TouchableHighlight>
);

export default MenuButton;
