import App from './App';
import ClassComponent from './src/pages/samples/ClassComponent';
import FunctionalComponent from './src/pages/samples/FunctionalComponent';
import Home from './src/pages/home';
import {Navigation} from 'react-native-navigation';

const components = [
  {componentName: 'App', componentProvider: App},
  {componentName: 'Home', componentProvider: Home},
  {componentName: 'ClassComponent', componentProvider: ClassComponent},
  {
    componentName: 'FunctionalComponent',
    componentProvider: FunctionalComponent,
  },
];

function registerAllComponents(components) {
  components.map(function (component) {
    Navigation.registerComponent(
      component.componentName,
      () => component.componentProvider,
    );
  });
}

registerAllComponents(components);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'App',
      },
    },
  });
});
