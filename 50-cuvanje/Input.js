import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default class Input extends Component {
  state = {text: ''}

  onChangeText = text => this.setState({text})

  onSubmitEditing = () => {
    const {text} = this.state
    if (!text) return
    this.props.onSubmitEditing(text)
    this.setState({text: ''})
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        value={this.state.text}
        placeholder={this.props.placeholder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
  },
})
