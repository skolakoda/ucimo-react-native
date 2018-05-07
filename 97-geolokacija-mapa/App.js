import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import { MapView } from 'expo'

const infoMessage = 'You should enable location on your device for full functionality.'

export default class App extends Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  }

  componentDidMount() {
    this.getLocation()
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      location => this.setState({region: {...this.state.region, ...location.coords}})
      , error => Alert.alert(error.message, infoMessage),
      {enableHighAccuracy: true}
    )
 }

  render() {
    const {latitude, longitude} = this.state.region
    return (
      <View >
        <MapView
          style={{ alignSelf: 'stretch', height: 400 }}
          region={this.state.region}
        >
          <MapView.Marker
            coordinate={{latitude, longitude}}
            title="You are here"
            description="Some description"
          />
        </MapView>
      </View>
    )
  }
}
