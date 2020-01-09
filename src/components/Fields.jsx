import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";

class Fields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null
    };
  }
  render() {
    return (
      <View style={{ alignItems: "center", height: 30 }}>
        <TextInput
          onChangeText={text => this.setState({ input: text })}
          value={this.state.input}
          style={styles.input1}
        ></TextInput>
        <TouchableHighlight
          style={styles.button1}
          onPress={() => {
            alert(this.state.input);
            // ! save item to persistent storage
          }}
        >
          <Text style={styles.text}>Add to List</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button1: {
    borderColor: "black",
    borderWidth: 1,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 5,
    opacity: 50,
    backgroundColor: "#fff"
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
  text: { color: "black" }
});

export default Fields;
