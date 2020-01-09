import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Marker = props => {
  // props.pingServer(props.x);
  // console.log(props.pingServer(props.x));
  console.log("yo");
  return (
    <View style={styles2.container}>
      {/* <Text>{`${props.placeName}`}</Text> */}
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
