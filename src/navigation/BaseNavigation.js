import React, { Component } from 'react'
import {View,Text} from 'react-native'
export class baseNavigation extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Before login </Text>
            </View>
        )
    }
}

export default baseNavigation
