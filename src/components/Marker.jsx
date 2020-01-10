import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Marker = props => (
  <View style={styles2.container}>
    <MapView.Marker
      coordinate={{
        latitude: props.geometry.latitude,
        longitude: props.geometry.longitude
      }}
    >
      <MapView.Callout style={styles2.popUp}>
        <View>
          <Text>{props.itemName}</Text>
          <Text>{props.itemAddress}</Text>
        </View>
      </MapView.Callout>
    </MapView.Marker>
  </View>
);

const styles2 = StyleSheet.create({
  container: {
    width: 20
  },
  popUp: {
    position: "absolute",
    justifyContent: "center"
  }
});

export default Marker;
