import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import {goToHome, navigateTo} from '../../services/navigation';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Tela de Login</Text>
        <Input placeholder="email" />
        <Input placeholder="senha" secureTextEntry={true} />

        <Button
          onPress={() => {
            // logica do login e dps goToHome com sucesso
            goToHome();
          }}
          title={'Login'}
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
