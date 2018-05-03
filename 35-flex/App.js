import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'

import Control from './Control'

export default class App extends Component {

  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

  render() {
    const {flexDirection, alignItems, justifyContent} = this.state
    const layoutStyle = {flexDirection, justifyContent, alignItems}

    const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
    const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'

    return (
      <View style={styles.container}>
        <Control
          label={'flexDirection'}
          value={flexDirection}
          options={['row', 'column']}
          onChange={flexDirection => this.setState({flexDirection})}
        />
        <Control
          label={primaryAxis + ' alignment (justifyContent)'}
          value={justifyContent}
          options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between']}
          onChange={justifyContent => this.setState({justifyContent})}
        />
        <Control
          label={secondaryAxis + ' alignment (alignItems)'}
          value={alignItems}
          options={['flex-start', 'center', 'flex-end', 'stretch']}
          onChange={alignItems => this.setState({alignItems})}
        />
        <View style={[styles.layout, layoutStyle]}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 25,
    backgroundColor: 'steelblue',
    margin: 5,
  },
})

AppRegistry.registerComponent('App', () => App)
