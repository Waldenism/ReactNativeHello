import React from 'react'
import { StackNavigator } from 'react-navigation'
import Home from './screens/Home'
import Teal from './screens/Teal'

const App = StackNavigator({
  Home: {
    screen: Home,
  },
  Teal: {
    screen: Teal
  }
})

export default App