import React from "react";
// import Axios from "axios";
import Marker from "./Marker.jsx";
import Fields from "./Fields.jsx";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight
} from "react-native";
import MapView from "react-native-maps";

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

    this.loadAll();
  }

  loadAll() {
    // ! get local storage in iphone, if possible
    // let arr = Object.keys(window.localStorage);
    let arr = ["Torchys", "Burger King"];
    this.setState(
      {
        savedPlaces: arr.sort()
      }
      // this.pingServer()
    );
  }

  pingServer() {
    // let arr = Object.keys(window.localStorage);
    let arr = ["Torchys", "Burger King"];
    let tempMarkers = [];
    Axios.post("https://10.54.166.222:1900/test", {
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
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 7.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
      >
        <View>
          <View style={styles1.outerContainer}>
            <Fields styles={styles1} />
          </View>
          {this.state.markers ? (
            <View>
              {this.state.markers.map((item, key) => (
                <Marker item={item} key={key} />
              ))}
            </View>
          ) : null}
        </View>
      </MapView>
    );
  }
}

const styles1 = StyleSheet.create({
  outerContainer: {
    marginLeft: 35,
    marginRight: 2,
    width: 400,
    justifyContent: "center"
  },
  input1: {
    marginTop: 150,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 50,
    marginBottom: 20,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  saveButtonHolder: {
    marginLeft: 120
  }
});

export default App2;
