import React from "react";
import { View, Text } from "react-native";

const Marker = props => {
  // props.pingServer(props.x);
  // console.log(props.pingServer(props.x));
  props.pingServer(props.x);
  return <Text>{props.x}</Text>;
};

// const Marker = props => {
//   let title = props.item[0].title;
//   let address = props.item[0].address;
//   let lat = props.item[0].geometry.lat;
//   let lng = props.item[0].geometry.lng;
//   return <View>{`${title}, ${address}, ${lat}, ${lng}`}</View>;
// };

export default Marker;
