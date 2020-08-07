
import { createStackNavigator, createAppContainer } from 'react-navigation';
import PageLogin from './Pages/Login';
import PageHome from './Pages/Home';
import PageNotification from './Pages/Notification';



const AppNavigator = createStackNavigator(
  {
    Login: PageLogin,
    Home: {
      screen: PageHome,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    Notification: {
      screen: PageNotification,
      navigationOptions: {
        gesturesEnabled: false,
      },
      
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(AppNavigator);
