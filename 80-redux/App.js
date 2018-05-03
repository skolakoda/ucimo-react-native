import React, { Component } from 'react'
import { AppRegistry, Text } from 'react-native'
import { createStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === 'INCREMENT')
    return {count: state.count + 1}
  return state
}

const initialState = {count: 0}

const store = createStore(reducer, initialState)

// dispatch actions
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})

const App = () => (
  <Text style={{fontSize: 100}}>
    {store.getState().count}
  </Text>
)

export default App

AppRegistry.registerComponent('App', () => App)
