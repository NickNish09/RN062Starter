import React, {Component} from 'react';
import {View} from 'react-native';
import {goToAuth, goToHome} from './src/services/navigation';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    goToAuth();
  }

  render() {
    return <View></View>;
  }
}
