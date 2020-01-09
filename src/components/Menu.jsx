import React from "react";
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  TouchableHighlight
} from "react-native";

const Menu = props => (
  <View style={styles.container}>
    <View style={styles.backButtonContainer}>
      <TouchableHighlight
        style={styles.backButton}
        onPress={() => props.closeMenu()}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableHighlight>
    </View>

    <View style={styles.listView}>
      {props.markers.map((item, key) => (
        <View key={key}>
          <View>
            <Text style={styles.text}>{item}</Text>
          </View>
          <View style={styles.deleteButtonContainer}>
            <TouchableHighlight onPress={() => alert("yooo")}>
              <Text>Delete</Text>
            </TouchableHighlight>
          </View>
        </View>
      ))}
    </View>
  </View>
);

export default Menu;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10
  },

  text: {
    fontSize: 20
  },
  backButton: {
    borderColor: "black",
    borderWidth: 2,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    top: 30,
    left: 165
  },
  buttonText: {
    color: "red",
    fontSize: 30
  },
  deleteButtonContainer: {},
  listView: {
    marginTop: 100
  }
});
