import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import axios from 'axios'
import { BASE_API_URL } from './global/util'


class Products extends Component {
    state = {
        dataProducts: [],
        products: [],
        product_names: [],
        product_prices: [],
    }
    
      componentDidMount(){
        this.getProducts()
      }
    

      getProducts = () => {
        console.log('function getProducts dipanggil')

        axios.get(BASE_API_URL + '/shoppinglists')
            .then(response => {
                console.log(response)
                this.setState({ 
                    dataProducts: response.data,
                })
            })
            .catch(error => {
                console.log(error)
            })
      }

    
      render(){
        console.log(this.state.dataProducts)
        return (
          <View>
            {this.state.dataProducts.length === 0 ? (
              <ActivityIndicator 
                style={{ marginTop: 50 }}
                size="large"/>) : (
                  this.state.dataProducts.map((dataku, index) => 
                    <View key={index} style={{ margin: 10 }}>
                      <Image 
                        style={{ width: 50, height: 50 }}
                        source={{ uri: dataku.image }} />
                      <Text>{dataku.product_name}</Text>
                    </View>
                  )
    
                )}
          </View>
        )
      }
}

export default Products