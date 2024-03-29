import React from "react";
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} from "react-native";
import NightModeToggle from "./NightModeToggle.jsx";

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

    <View style={styles.nightSwitch}>
      <Text style={props.night ? styles.nightTextNight : styles.nightTextDay}>
        Dark mode
      </Text>
      <NightModeToggle toggleNight={props.toggleNight} night={props.night} />
    </View>

    <View>
      <Text style={props.night ? styles.myPlacesNight : styles.myPlacesDay}>
        My places
      </Text>
    </View>
    <View
      style={props.night ? styles.dividingLineNight : styles.dividingLineDay}
    />
    <ScrollView style={styles.listView}>
      {props.markers.map((item, key) => (
        <View key={key} style={styles.singleItem}>
          <View>
            <Text style={props.night ? styles.textNight : styles.textDay}>
              {item}
            </Text>
          </View>
          <View
            style={
              props.night
                ? styles.deleteButtonContainerNight
                : styles.deleteButtonContainerDay
            }
          >
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
      <View style={{ height: 25 }}></View>
    </ScrollView>
  </View>
);

export default Menu;

const styles = StyleSheet.create({
  myPlacesNight: {
    position: "absolute",
    color: "white",
    top: 100,
    left: 10,
    fontSize: 35
  },
  myPlacesDay: {
    position: "absolute",
    color: "black",
    top: 100,
    left: 10,
    fontSize: 35
  },
  nightSwitch: {
    display: "flex",
    top: 5,
    right: 0
  },
  nightTextDay: {
    color: "black",
    left: 225,
    top: 55,
    fontSize: 17
  },
  nightTextNight: {
    color: "white",
    left: 225,
    top: 55,
    fontSize: 17
  },
  singleItem: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
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
    borderWidth: 1,
    alignSelf: "flex-start",
    top: 50,
    left: 16,
    paddingHorizontal: 3,
    position: "absolute",
    zIndex: 10
  },
  backButtonNight: {
    backgroundColor: "#000",
    borderColor: "white",
    borderRadius: 3,
    borderWidth: 1,
    alignSelf: "flex-start",
    top: 50,
    left: 16,
    paddingHorizontal: 3,
    position: "absolute",
    zIndex: 10
  },
  buttonTextDay: {
    fontWeight: "300",
    color: "black",
    fontSize: 30
  },
  buttonTextNight: {
    fontWeight: "300",
    color: "white",
    fontSize: 30
  },
  deleteButtonContainerDay: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 3,
    width: 80,
    marginRight: 4
  },
  deleteButtonContainerNight: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 3,
    width: 80,
    marginRight: 4
  },
  deleteButtonNight: {
    marginTop: 2,
    marginRight: 5,
    color: "red",
    fontSize: 20,
    alignSelf: "center",
    paddingLeft: 5,
    marginBottom: 3
  },
  deleteButtonDay: {
    marginTop: 2,
    marginRight: 5,
    color: "red",
    fontSize: 20,
    alignSelf: "center",
    paddingLeft: 5,
    marginBottom: 3
  },
  dividingLineDay: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    top: 150
  },
  dividingLineNight: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    top: 150
  },
  listView: {
    marginLeft: 10,
    marginTop: 150,
    flex: 1
  }
});
