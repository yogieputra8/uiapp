import React, { Component } from 'react'
import { View, Text } from 'react-native'



export default class Header extends Component {
    state = {
        namaku: 'JOKO',
        umur: 23
    }


    render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
                <Text>{this.state.namaku}</Text>
            </View>
        )
    }
}