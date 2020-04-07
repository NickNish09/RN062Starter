import AsyncStorage from '@react-native-community/async-storage';
import {USER_KEY} from './config';

const deviceStorage = {
  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Saved ' + key + 'with value' + value);
      // goToAuth();
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },
  async getItem(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      console.log('Got item: ' + value);
      if (value !== null) {
        return value;
      } else {
        console.log('Valor nulo');
        return null;
      }
      // goToAuth();
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },
  async loadToken() {
    try {
      const value = await AsyncStorage.getItem(USER_KEY);
      if (value !== null) {
        return value;
      } else {
        // this.setState({
        //   loading: false
        // });
      }
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },
  async removeValue(key) {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Removed ' + key);
    } catch (error) {
      console.log('Async storage error: ' + error.message);
    }
  },
};

export default deviceStorage;
