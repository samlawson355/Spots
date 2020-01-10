import React from "react";
import { View, Switch, Text, StyleSheet } from "react-native";

class NightModeToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switch: false };
  }
  toggle(value) {
    this.setState(
      {
        switch: value
      },
      this.props.toggleNight(value)
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Switch value={this.props.night} onValueChange={e => this.toggle(e)} />
      </View>
    );
  }
}
export default NightModeToggle;

const styles = StyleSheet.create({
  container: {
    width: 30,
    left: 320,
    top: 50,
    position: "absolute"
  }
  // switch: {
  //   top: 0,
  //   left: 320
  // }
});
