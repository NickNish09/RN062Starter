import {Navigation} from 'react-native-navigation';

export default flash = (title, message, onCancel, onOk) => {
  Navigation.showModal({
    component: {
      name: 'Modal',
      passProps: {
        title: title,
        message: message,
        onCancel: onCancel,
        onOk: onOk,
      },
      options: {
        topBar: {
          visible: false,
          drawBehind: true,
        },
        modalPresentationStyle: 'overCurrentContext',
        screenBackgroundColor: 'transparent',
        layout: {
          backgroundColor: 'transparent',
        },
      },
    },
  });
};
