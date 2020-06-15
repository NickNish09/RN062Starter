import React, {Component} from 'react';
import {Alert, SafeAreaView} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import {goToHome, navigateTo} from '../../services/navigation';
import {fontFamiliy, fonts} from '../../styles/base';
import styles from './styles';
import flash from '../../services/flash';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <Text style={styles.loginTitle}>Tela de Login</Text>

        <Button
          onPress={() => {
            // logica do login e dps goToHome com sucesso
            flash(
              'Oi',
              'Oi',
              () => console.log('oi'),
              () => goToHome(),
            );
          }}
          title={'Login'}
          titleStyle={{fontFamily: fontFamiliy.primary}}
        />
      </SafeAreaView>
    );
  }
}
