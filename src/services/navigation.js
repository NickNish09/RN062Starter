import {Navigation} from 'react-native-navigation';
import {colors} from '../styles/base';

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
                    color: colors.dark,
                  },
                },
              },
            },
          },
        ],
        options: {
          bottomTab: {
            selectedIconColor: colors.primary_dark,
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
                    color: colors.dark,
                  },
                },
              },
            },
          },
        ],
        options: {
          bottomTab: {
            selectedIconColor: colors.primary_dark,
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
                    color: colors.dark,
                  },
                },
              },
            },
          },
        ],
        options: {
          bottomTab: {
            selectedIconColor: colors.primary_dark,
            icon: require('../assets/icons/shopping-bag-solid.png'),
          },
        },
      },
    },
  ],
  options: {
    bottomTabs: {
      backgroundColor: colors.dark,
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

export const goToAuth = () =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [{component: {name: 'SignIn'}}],
      },
    },
  });

export const navigateTo = (
  componentName,
  screenName,
  componentId,
  passProps,
) => {
  if (passProps !== undefined) {
    passProps.hasBackButton = true;
  } else {
    passProps = {hasBackButton: true};
  }
  Navigation.push(componentId, {
    component: {
      name: componentName,
      passProps: passProps,
      options: {
        topBar: {
          visible: true,
          drawBehind: true,
          animate: false,
          background: {
            color: 'transparent',
          },
          backButton: {
            visible: false,
            showTitle: false,
          },
          elevation: 0,
        },
      },
    },
  });
};

export const navigateToWithBackButton = (
  componentName,
  screenName,
  componentId,
  passProps,
) => {
  if (passProps !== undefined) {
    passProps.hasBackButton = true;
  } else {
    passProps = {hasBackButton: true};
  }
  Navigation.push(componentId, {
    component: {
      name: componentName,
      passProps: passProps,
      options: {
        topBar: {
          visible: true,
          drawBehind: true,
          animate: false,
          background: {
            color: 'transparent',
          },
          backButton: {
            visible: true,
            showTitle: false,
            color: colors.primary_dark,
          },
          elevation: 0,
        },
      },
    },
  });
};

export const popNavigation = (componentId) => {
  Navigation.pop(componentId);
};

export const popToRoot = (componentId) => {
  Navigation.popToRoot(componentId);
};
