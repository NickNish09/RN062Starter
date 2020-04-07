import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from 'react-native-elements';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Tela de Cadastro</Text>
      </SafeAreaView>
    );
  }
}
