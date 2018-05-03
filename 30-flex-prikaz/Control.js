import React, { Component } from 'react'
import { AppRegistry, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Control extends Component {
  onPress = option => {
    this.props.onChange(option)
  }

  renderOption = (option, i) => {
    return (
      <TouchableOpacity key={i}
        style={[styles.option, option === this.props.value && styles.activeOption]}
        onPress={this.onPress.bind(this, option)}
      >
        <Text style={styles.text}>{option}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {label, options} = this.props
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.label]}>{label}</Text>
        <View style={styles.optionsContainer}>
          {options.map(this.renderOption)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingBottom: 20,
  },
  text: {
    fontSize: 16,
  },
  label: {
    padding: 4,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  option: {
    padding: 4,
    backgroundColor: 'whitesmoke',
  },
  activeOption: {
    backgroundColor: 'skyblue',
  },
})
