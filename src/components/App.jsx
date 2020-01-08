import React from "react";
import Axios from "axios";
import Marker from "./Marker.jsx";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight
} from "react-native";

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedPlaces: [],
      markers: null
    };
    this.saveEntry = this.saveEntry.bind(this);
    this.loadAll = this.loadAll.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.pingServer = this.pingServer.bind(this);
  }

  saveEntry(e) {
    // window.localStorage.setItem(e, e);
    document.getElementById("entryForm").value = "";
    this.loadAll();
  }

  loadAll() {
    // ! get local storage in iphone, if possible
    // let arr = Object.keys(window.localStorage);
    let arr = ["Torchys", "Burger King"];
    this.setState(
      {
        savedPlaces: arr.sort()
      },
      this.pingServer()
    );
  }

  pingServer() {
    // let arr = Object.keys(window.localStorage);
    let arr = ["Torchys", "Burger King"];
    let tempMarkers = [];
    Axios.post("/test", {
      placeList: arr,
      "Access-Control-Allow-Origin": "*"
    })
      .then(data => data.data)
      .then(data => {
        data.map(nextData =>
          nextData.map(place =>
            tempMarkers.push([
              {
                title: place.name,
                address: place.formatted_address,
                geometry: {
                  lat: place.geometry.location.lat,
                  lng: place.geometry.location.lng
                }
              }
            ])
          )
        );
        return tempMarkers;
      })
      .then(tempMarkers =>
        this.setState({
          markers: tempMarkers
        })
      )
      .catch(console.log);
    // .then(data => console.log(data[0]))
    // .then(data => data.map(console.log));
    // .then(data => data.data.map(item => item.map(console.log)));
  }

  deleteEntry(e) {
    // window.localStorage.removeItem(e);
    this.loadAll();
  }

  componentDidMount() {
    this.loadAll();
  }

  render() {
    return (
      <View>
        <TextInput
          id="entryForm"
          style={styles.input1}
          onKeyPress={e => {
            if (e.charCode === 13) {
              this.saveEntry(document.getElementById("entryForm").value);
            }
          }}
        ></TextInput>
        <TouchableHighlight
          title="Save"
          style={styles.button}
          onPress={() => alert("push!")}
        >
          <Text>Push</Text>
        </TouchableHighlight>

        {this.state.markers ? (
          <View>
            {this.state.markers.map((item, key) => (
              <Marker item={item} key={key} />
            ))}
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input1: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    width: 400,
    height: 100,
    marginBottom: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    fontSize: 10,
    borderColor: "red",
    borderWidth: 1,
    width: 100
  }
});

export default App2;
