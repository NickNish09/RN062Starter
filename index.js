import App from './App';
import ClassComponent from './src/pages/samples/ClassComponent';
import FunctionalComponent from './src/pages/samples/FunctionalComponent';
import Home from './src/pages/home';
import Teste from './src/pages/teste';
import SignIn from './src/pages/auth/SignIn';
import SignUp from './src/pages/auth/SignUp';
import {Navigation} from 'react-native-navigation';

const components = [
  {componentName: 'App', componentProvider: App},
  {componentName: 'Home', componentProvider: Home},
  {componentName: 'SignIn', componentProvider: SignIn},
  {componentName: 'SignUp', componentProvider: SignUp},
  {componentName: 'Teste', componentProvider: Teste},
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
