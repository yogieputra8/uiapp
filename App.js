/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import MainPage from './src/MainPage'
import LoginPage from './src/LoginPage'
import RegisterPage from './src/RegisterPage'
import { StackNavigator } from 'react-navigation'



const Router =  StackNavigator({
  Main: { screen: MainPage },
  Login: { screen: LoginPage },
  Register: { screen: RegisterPage }
})

export default class App extends Component {
  render() {
    return <Router />
  }
}
