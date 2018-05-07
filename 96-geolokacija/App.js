import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Geolocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position =>
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      }), error => this.setState({ error: error.message })
    )
  }

  render() {
    const {latitude, longitude, error} = this.state
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', 'justifyContent': 'center' }}>
        {latitude && <Text>Latitude: {latitude}</Text>}
        {longitude && <Text>Longitude: {longitude}</Text>}
        {error && <Text>Error: {error}</Text>}
      </View>
    )
  }
}

export default Geolocation
