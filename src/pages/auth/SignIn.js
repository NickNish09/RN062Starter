import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import {goToHome, navigateTo} from '../../services/navigation';
import {fontFamiliy, fonts} from '../../styles/base';
import styles from './styles';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <Text style={styles.loginTitle}>Tela de Login</Text>
        <Input placeholder="email" />
        <Input placeholder="senha" secureTextEntry={true} />

        <Button
          onPress={() => {
            // logica do login e dps goToHome com sucesso
            goToHome();
          }}
          title={'Login'}
          titleStyle={{fontFamily: fontFamiliy.primary}}
        />

        <Button
          onPress={() =>
            navigateTo('SignUp', 'Cadastro', this.props.componentId)
          }
          title={'Novo usuário? Cadastrar-se'}
        />
      </SafeAreaView>
    );
  }
}
