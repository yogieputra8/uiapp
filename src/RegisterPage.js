import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import axios from 'axios'
import { BASE_API_URL } from './global/util'



class RegisterPage extends Component {

    

    render(){
        return (
            <View style={{ flex: 1, backgroundColor: '#03B4D2' }}>
                <Text style={{ marginLeft: 25, fontSize: 25, 
                    color: 'white', marginTop:200 }}>Registration Form</Text>
                <View style={{ marginLeft: 25, marginTop:25 }}>
                    <TextInput style={{ 
                        fontSize: 18,
                        width: '70%', color: 'white' }} placeholder="Email" />
                    <TextInput style={{ 
                        fontSize: 18,
                        width: '70%', color: 'white' }} placeholder="Password" />
                </View>
                <View style={{ 
                    marginTop:70, flexDirection: 'row', marginLeft: 25 }}>
                    <TouchableOpacity 
                        onPress={}
                        style={{ 
                        backgroundColor: 'green', width: '40%', borderRadius: 3 }}>
                        <Text style={{ 
                        textAlign: 'center', fontSize: 20, fontWeight: '500', color: 'white', margin: 10 }}>
                        Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ 
                        marginLeft: 25,
                        backgroundColor: 'red', width: '40%', borderRadius: 3 }}>
                        <Text style={{ 
                        textAlign: 'center', fontSize: 20, fontWeight: '500', color: 'white', margin: 10 }}>
                        Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default RegisterPage