import React, { Component } from "react"
import { TouchableOpacity } from "react-native"

import Icon from 'react-native-vector-icons/Ionicons';

export default class BarClose extends Component {
    render() {
        return (
            <TouchableOpacity onPress={ this.props.onPress }>
              <Icon name="ios-close" style={ { marginLeft: 20, marginRight: 20 } } color='#2894ff' size={ 40 } />
            </TouchableOpacity>
            );
    }
}