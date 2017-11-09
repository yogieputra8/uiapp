import React, { Component } from 'react'
import { View, Text } from 'react-native'



export default class Header extends Component {
    state = {
        namaku: 'JOKO'
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