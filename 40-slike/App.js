import React, { Component } from 'react'
import { AppRegistry, View, Image, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View>
        <Image source={require('./logo.png')} />
        <Image
          style={styles.image}
          source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
})

AppRegistry.registerComponent('App', () => App)
