import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {colors} from '../../styles/base';
import styles from './styles';
import {Button} from 'react-native-elements';

export default class Modal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.modalTitle}>{this.props.title}</Text>
          <Text style={styles.modalText}>{this.props.message}</Text>
          <View style={styles.containerRow}>
            <Button
              title={'CANCELAR'}
              onPress={() => {
                if (typeof this.props.onCancel === 'function') {
                  this.props.onCancel();
                }
                Navigation.dismissAllModals();
              }}
              buttonStyle={styles.buttonCancel}
              titleStyle={{fontFamily: 'Montserrat-Black'}}
            />
            <Button
              title={'OK'}
              onPress={() => {
                if (typeof this.props.onOk === 'function') {
                  this.props.onOk();
                }
                Navigation.dismissAllModals();
              }}
              buttonStyle={styles.buttonOk}
              titleStyle={{fontFamily: 'Montserrat-Black'}}
            />
          </View>
        </View>
      </View>
    );
  }
}
