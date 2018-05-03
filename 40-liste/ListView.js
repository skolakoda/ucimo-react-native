import React, { Component } from 'react'
import { AppRegistry, ListView, View, Text, StyleSheet } from 'react-native'

const data = [
  {id: 0, text: 'View'},
  {id: 1, text: 'Text'},
  {id: 2, text: 'Image'},
  {id: 3, text: 'ScrollView'},
  {id: 4, text: 'ListView'},
]

// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id
// DataSource template object
const ds = new ListView.DataSource({rowHasChanged})

export default class App extends Component {
  state = {
    dataSource: ds.cloneWithRows(data)
  }

  renderRow = (rowData) => (
    <Text style={styles.row}>
      {rowData.text}
    </Text>
  )

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})

AppRegistry.registerComponent('App', () => App)
