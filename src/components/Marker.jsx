import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Marker = props => {
  // props.pingServer(props.x);
  // console.log(props.pingServer(props.x));

  return (
    <View style={styles2.container}>
      <MapView.Marker
        coordinate={{
          latitude: props.geometry.latitude,
          longitude: props.geometry.longitude
        }}
      />
    </View>
  );
};

// const Marker = props => {
//   let title = props.item[0].title;
//   let address = props.item[0].address;
//   let lat = props.item[0].geometry.lat;
//   let lng = props.item[0].geometry.lng;
//   return <View>{`${title}, ${address}, ${lat}, ${lng}`}</View>;
// };

const styles2 = StyleSheet.create({
  container: {
    width: 20
  }
});

export default Marker;
