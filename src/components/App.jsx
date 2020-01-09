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
      testGets: null
    };
    this.saveEntry = this.saveEntry.bind(this);
    // this.loadAll = this.loadAll.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.pingServer = this.pingServer.bind(this);
  }

  saveEntry(e) {
    // window.localStorage.setItem(e, e);
    // this.loadAll();
  }

  // loadAll() {
  //   // ! get local storage in iphone, if possible
  //   // let arr = Object.keys(window.localStorage);
  //   let arr = ["Torchys", "Burger King"];
  //   this.setState(
  //     {
  //       savedPlaces: arr.sort()
  //     }
  //     // this.pingServer()
  //   );
  // }

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
    // this.loadAll();
    this.pingServer();
  }

  render() {
    return (
      <View style={styles1.container}>
        <MapView
          style={styles1.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}
        >
          <MapView.Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            coordinate={{ latitude: 37.78825001, longitude: -122.4324 }}
          />
          <MapView.Marker
            coordinate={{ latitude: 37.788249, longitude: -122.4324 }}
          />
          <View>
            <View style={styles1.outerContainer}>
              <Fields />
            </View>
            <MyList />
            {this.state.testGets
              ? (() =>
                  this.state.testGets.map((item, key) => (
                    <Marker1
                      key={key}
                      placeName={item.title}
                      placeAddress={item.address}
                      placeCoordsLat={item.geometry.lat}
                      placeCoordsLng={item.geometry.lng}
                    />
                  )))()
              : null}
            {/* 
          {this.state.testGets
            ? this.state.testGets.map(item => <Text>render</Text>)
            : null} */}
          </View>
        </MapView>
      </View>
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
    alignItems: "center",
    textAlign: "center"
  },
  saveButtonHolder: {
    marginLeft: 120
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
