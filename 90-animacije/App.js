import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native'

// wrap component to make it animatable
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

export default class App extends Component {
  state = {height: new Animated.Value(100)}

  startAnimation = () => {
    const {height} = this.state
    height.setValue(100) // reset value if needed
    Animated.spring(height, {toValue: 300, friction: 0.8}).start()
  }

  componentDidMount() {
    this.startAnimation()
  }

  render() {
    const {height} = this.state
    return (
      <AnimatedTouchableOpacity
        onPress={this.startAnimation}
        style={[styles.button, {height}]}
      >
        <Text style={styles.text}>Tap Me</Text>
      </AnimatedTouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
  },
})

AppRegistry.registerComponent('App', () => App)
