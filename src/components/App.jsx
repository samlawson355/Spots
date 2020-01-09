import React from "react";
import Axios from "axios";
import Marker1 from "./Marker.jsx";
import Fields from "./Fields.jsx";
import MyList from "./MyList.jsx";
import key from "../../key.js";
import MenuButton from "./MenuButton.jsx";
import Menu from "./Menu.jsx";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
const custMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#242f3e"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#746855"
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#242f3e"
      }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#263c3f"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6b9a76"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#38414e"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#212a37"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9ca5b3"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#746855"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#1f2835"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f3d19c"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#2f3948"
      }
    ]
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#17263c"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#515c6d"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#17263c"
      }
    ]
  }
];

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedPlaces: [],
      markers: ["Torchys", "Burger King"],
      locations: null,
      initLat: null,
      initLng: null,
      error: null,
      menuOpen: false
    };
    this.saveEntry = this.saveEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.pingServer = this.pingServer.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  saveEntry(e) {
    if (!e || typeof e !== "string") {
      this.setState({
        error: "Please enter the name of a place you like!"
      });
      return;
    } else {
      this.setState({
        error: null
      });
    }

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
            locations: data
          })
        )
        .catch(console.log);
    }
  }

  deleteEntry(e) {
    // window.localStorage.removeItem(e);
    // this.loadAll();
  }

  openMenu() {
    this.setState({
      menuOpen: true
    });
  }

  closeMenu() {
    this.setState({
      menuOpen: false
    });
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
    return this.state.menuOpen ? (
      <View>
        <Menu markers={this.state.markers} closeMenu={this.closeMenu} />
      </View>
    ) : (
      <View style={styles1.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles1.map}
          initialRegion={{
            latitude: this.state.initLat || 30.2672,
            longitude: this.state.initLng || -97.7431,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}
          customMapStyle={(() => {
            let today = new Date();
            let hour = today.getHours();
            return hour > 17 || hour < 6 ? custMapStyle : null;
          })()}
        >
          {this.state.locations
            ? this.state.locations.map((item, key) => (
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
        <View style={styles1.test}>
          <MenuButton openMenu={this.openMenu} />
        </View>
        {/* <Text>does this show</Text> */}
        <View style={styles1.outerContainer}>
          <Fields saveEntry={this.saveEntry} error={this.state.error} />
        </View>
      </View>
    );
  }
}

const styles1 = StyleSheet.create({
  test: {
    position: "absolute",
    top: 500,
    left: 10
  },
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
