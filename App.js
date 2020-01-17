import React from "react";
import { AppLoading, SplashScreen } from "expo";
import { StyleSheet, Text, View } from "react-native";
import App2 from "./src/components/App.jsx";
import MapView from "react-native-maps";

// export default function App() {
//   return <App2 style={{ flex: 1 }} />;
// }

// testing below
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initLat: null,
      initLng: null,
      isReady: false
    };
    this.getLoc = this.getLoc.bind(this);
  }

  getLoc() {
    navigator.geolocation.getCurrentPosition(results =>
      this.setState(
        {
          initLat: results.coords.latitude,
          initLng: results.coords.longitude
        },
        SplashScreen.hide()
      )
    );
  }

  componentDidMount() {
    SplashScreen.preventAutoHide();
  }
  render() {
    return this.state.isReady ? (
      <App2
        style={{ flex: 1 }}
        initLat={this.state.initLat}
        initLng={this.state.initLng}
      />
    ) : (
      <AppLoading
        autoHideSplash={false}
        startAsync={this.getLoc}
        onFinish={() => this.setState({ isReady: true })}
      />
    );
  }
}
export default App;
