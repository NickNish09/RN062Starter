import {Navigation} from 'react-native-navigation';

const bottomTabs = {
  id: 'MainBottomTabs',
  children: [
    {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                  background: {
                    color: 'black',
                  },
                },
              },
            },
          },
        ],
        options: {
          bottomTab: {
            selectedIconColor: '#819301',
            icon: require('../assets/icons/home-solid.png'),
          },
        },
      },
    },
    {
      stack: {
        children: [
          {
            component: {
              name: 'ClassComponent',
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                  background: {
                    color: 'black',
                  },
                },
              },
            },
          },
        ],
        options: {
          bottomTab: {
            selectedIconColor: '#819301',
            icon: require('../assets/icons/joystic-solid.png'),
          },
        },
      },
    },
    {
      stack: {
        children: [
          {
            component: {
              name: 'FunctionalComponent',
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                  background: {
                    color: 'black',
                  },
                },
              },
            },
          },
        ],
        options: {
          bottomTab: {
            selectedIconColor: '#819301',
            icon: require('../assets/icons/shopping-bag-solid.png'),
          },
        },
      },
    },
  ],
  options: {
    bottomTabs: {
      backgroundColor: 'black',
      titleDisplayMode: 'alwaysHide',
    },
  },
};

export const goToHome = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: bottomTabs,
    },
  });
