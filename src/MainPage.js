/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from 'react-native';
import axios from 'axios'
// import Header from './Header'


export default class MainPage extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#03B4D2' }}>
        <View style={{ marginLeft: 25, marginTop: 100 }}>
          <Text style={{ color: 'white', fontSize: 45, fontWeight: 'bold' }}>Join</Text>
          <Text style={{ color: 'white', fontSize: 45, fontWeight: 'bold' }}>Our App</Text>
          <Text style={{ color: 'white', fontSize: 45, fontWeight: 'bold' }}>Now!</Text>
        </View>
        
        <View style={{ 
          marginTop:180, flexDirection: 'row', marginLeft: 25 }}>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Login', { nama: 'JOKO', age: 23 })}
            style={{ backgroundColor: 'green', width: '40%', borderRadius: 3 }}>
            <Text style={{ 
              textAlign: 'center', fontSize: 20, fontWeight: '500', color: 'white', margin: 10 }}>
              Login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Register')}
            style={{ marginLeft: 25,
            backgroundColor: 'grey', width: '40%', borderRadius: 3 }}>
            <Text style={{ 
              textAlign: 'center', fontSize: 20, fontWeight: '500', color: 'white', margin: 10 }}>
              Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  static navigationOptions = {
      header: null
  }
}


