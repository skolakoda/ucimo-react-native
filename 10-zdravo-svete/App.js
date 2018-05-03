import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Zdravo Svete!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'whitesmoke',
    color: '#4A90E2',
    fontSize: 24,
    padding: 10,
  },
})

AppRegistry.registerComponent('App', () => App)
