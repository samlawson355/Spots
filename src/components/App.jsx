import React from "react";
import Axios from "axios";
import Marker1 from "./Marker.jsx";
import Fields from "./Fields.jsx";
import MyList from "./MyList.jsx";
import key from "../../key.js";
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
      markers: ["Torchys", "Burger King"],
      testGets: null,
      initLat: null,
      initLng: null,
      error: null
    };
    this.saveEntry = this.saveEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.pingServer = this.pingServer.bind(this);
  }
  t;
  saveEntry(e) {
    if (!e || typeof e !== "string") {
      this.setState({
        error: "Please enter the name of a place you like!"
      });
    } else {
      this.setState({
        error: null
      });
    }
    // window.localStorage.setItem(e, e);
    let arr = this.state.markers;

    arr.push(e);

    this.setState(
      {
        markers: arr
      },
      this.pingServer()
    );
  }

  pingServer() {
    // let arr = Object.keys(window.localStorage);
    let arr1 = [];
    let arr2 = [];
    let hold = this.state.markers;

    for (let i = 0; i < hold.length; i++) {
      arr1.push(
        Axios.get(
          `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${hold[i]}&key=${key.key}`
        )
      );

      Promise.all(arr1)
        .then(data =>
          data.map(item =>
            item.data.results.map(onePlace => {
              // console.log(onePlace);
              arr2.push({
                title: onePlace.name,
                address: onePlace.formatted_address,
                geometry: {
                  lat: onePlace.geometry.location.lat,
                  lng: onePlace.geometry.location.lng
                }
              });
              return arr2;
            })
          )
        )
        .then(data => data[0])
        .then(data => data[0])
        .then(data =>
          this.setState({
            testGets: data
          })
        )
        .catch(console.log);
    }
  }

  deleteEntry(e) {
    // window.localStorage.removeItem(e);
    // this.loadAll();
  }

  componentDidMount() {
    this.pingServer();
    return navigator.geolocation.getCurrentPosition(results =>
      this.setState({
        initLat: results.coords.latitude,
        initLng: results.coords.longitude
      })
    );
  }

  render() {
    return (
      <View style={styles1.container}>
        <MapView
          style={styles1.map}
          initialRegion={{
            latitude: 30.2672,
            longitude: -97.7431,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}
        >
          {this.state.testGets
            ? this.state.testGets.map((item, key) => (
                <Marker1
                  key={key}
                  geometry={{
                    latitude: item.geometry.lat,
                    longitude: item.geometry.lng
                  }}
                />
              ))
            : null}
        </MapView>
        <View style={styles1.outerContainer}>
          <Fields saveEntry={this.saveEntry} error={this.state.error} />
        </View>
      </View>
    );
  }
}

const styles1 = StyleSheet.create({
  outerContainer: {
    position: "absolute",
    top: 0
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default App2;
