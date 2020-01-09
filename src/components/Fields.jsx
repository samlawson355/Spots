import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";
import InputError from "./InputError.jsx";

class Fields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.setState({ input: text })}
          value={this.state.input}
          style={styles.input1}
        ></TextInput>
        <TouchableHighlight
          style={this.props.night ? styles.button1Night : styles.button1Day}
          onPress={() => {
            this.props.saveEntry(this.state.input);
            this.setState({ input: null });
            // ! save item to persistent storage
          }}
        >
          <Text style={this.props.night ? styles.textNight : styles.textDay}>
            Add to List
          </Text>
        </TouchableHighlight>
        <View style={styles.errorBox}>
          <InputError error={this.props.error} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 30
  },
  button1Day: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 3,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#fff"
  },
  button1Night: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 3,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#000"
  },
  input1: {
    marginTop: 75,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 50,
    marginBottom: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    textAlign: "center"
  },
  textDay: {
    color: "black"
  },
  textNight: {
    color: "white"
  },
  errorBox: {
    marginTop: 10,
    height: 50
  }
});

export default Fields;
