import React from "react";
import { View, Switch, Text, StyleSheet } from "react-native";

class NightModeToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switch: false };
  }
  toggle() {
    this.setState({
      switch: !this.state.switch
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Switch onValueChange={this.toggle} style={styles.switch}></Switch>
      </View>
    );
  }
}
export default NightModeToggle;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row"
  },
  switch: {
    top: 50,
    left: 320
  }
});
