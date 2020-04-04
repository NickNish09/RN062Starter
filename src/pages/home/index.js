import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {navigateTo} from '../../services/navigation';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    return (
      <View>
        <Text>Home</Text>
        <TouchableOpacity
          onPress={() => navigateTo('Teste', 'Teste', this.props.componentId)}>
          <Text>Navegar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
