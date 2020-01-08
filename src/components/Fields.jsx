import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";

// const SaveButton = props => {
//   return (
//     <TouchableHighlight
//       style={styles.button}
//       onPress={() => {
//         alert("push button pressed!");
//         // !
//       }}
//     >
//       <Text>Push</Text>
//     </TouchableHighlight>
//   );
// };

class Fields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null
    };
  }
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <TextInput
          onChangeText={text => this.setState({ input: text })}
          value={this.state.input}
          style={this.props.styles.input1}
        ></TextInput>
        <TouchableHighlight
          style={styles.button1}
          onPress={() => {
            alert(this.state.input);
            // ! save item to persistent storage
          }}
        >
          <Text style={styles.text}>push</Text>
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
    opacity: 50
  },
  text: { color: "red" }
});

export default Fields;
