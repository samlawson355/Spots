import React from "react";
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  TouchableHighlight
} from "react-native";

const Menu = props => (
  <View style={props.night ? styles.containerNight : styles.containerDay}>
    <View>
      <TouchableHighlight
        style={props.night ? styles.backButtonNight : styles.backButtonDay}
        onPress={() => props.closeMenu()}
      >
        <Text
          style={props.night ? styles.buttonTextNight : styles.buttonTextDay}
        >
          Back
        </Text>
      </TouchableHighlight>
    </View>

    <View style={styles.listView}>
      {props.markers.map((item, key) => (
        <View key={key}>
          <View>
            <Text style={props.night ? styles.textNight : styles.textDay}>
              {item}
            </Text>
          </View>
          <View style={styles.deleteButtonContainer}>
            <TouchableHighlight onPress={() => props.deleteEntry(item)}>
              <Text
                style={
                  props.night
                    ? styles.deleteButtonNight
                    : styles.deleteButtonDay
                }
              >
                Delete
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      ))}
    </View>
  </View>
);

export default Menu;

const styles = StyleSheet.create({
  containerDay: {
    backgroundColor: "#fff",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute"
  },
  containerNight: {
    backgroundColor: "#000",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute"
  },
  textDay: {
    color: "black",
    fontSize: 20
  },
  textNight: {
    color: "white",
    fontSize: 20
  },
  backButtonDay: {
    backgroundColor: "#fff",
    borderColor: "black",
    borderRadius: 3,
    borderWidth: 2,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    top: 30,
    left: 165
  },
  backButtonNight: {
    backgroundColor: "#000",
    borderColor: "white",
    borderRadius: 3,
    borderWidth: 2,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    top: 30,
    left: 165
  },
  buttonTextDay: {
    color: "black",
    fontSize: 30
  },
  buttonTextNight: {
    color: "white",
    fontSize: 30
  },
  deleteButtonNight: {
    color: "white"
  },
  deleteButtonContainer: {},
  listView: {
    marginLeft: 10,
    marginTop: 100
  }
});
