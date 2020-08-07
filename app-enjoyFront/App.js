import React, { PureComponent } from 'react';
import { Root } from 'native-base';
import styled from 'styled-components/native';
import {
  Platform,
  View,
  StatusBar,
  AsyncStorage,
  Text,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { AppLoading, Notifications } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as Icon from '@expo/vector-icons';
import Constants from 'expo-constants';

import services from './services/token.services';

// Routes
import AppNavigator from './AppNavigator';
import NavigationService from './NavigationService';

// Components

// Contexts
import { Context, Provider } from './Context';


const release = Constants.manifest.revisionId === undefined
  ? 'enjoy-app@v'
  : Constants.manifest.revisionId;

// Styles
const StyledView = styled(View)`
  height: 100%;
  width: 100%;
`;

console.disableYellowBox = true;

export default class App extends PureComponent {
  state = {
    isLoadingComplete: false,
    navigator: null,
    expoPushToken: '',
    notification: {},
  }

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      
      const response = await services.setTokenServices({token: token, reservation_number: '230152'});

      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./assets/splash.png'),
      require('./assets/logo.png'),
      require('./assets/logo-white.png'),
      require('./assets/piscina2.png'),
    ]),
    Font.loadAsync({
      ...Icon.Ionicons.font,
      ...Icon.Entypo.font,
      ...Icon.Feather.font,
      ...Icon.AntDesign.font,
      ...Icon.MaterialCommunityIcons.font,
      ...Icon.MaterialIcons.font,
      ...Icon.FontAwesome.font,
      ...Icon.FontAwesome5.font,
      'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
      'Roboto': require("native-base/Fonts/Roboto.ttf"),
      'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf")
    }),
  ]);

  handleLoadingError = (error) => {
    console.warn(error);
    throw new Error(`${error}`);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  componentDidMount() {
    this.registerForPushNotificationsAsync();
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = notification => {
    // Vibration.vibrate();
    console.log(notification);
    this.setState({ notification: notification });
    NavigationService.navigate('Notification');
  };

  render() {
    const { isLoadingComplete, navigator } = this.state;

    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }

    return (
      <Provider>
        <Context.Consumer>
          {({
            logged,
          }) => (
            <Root>
              <StyledView>
                <StatusBar hidden />
                <AppNavigator
                  ref={(navigatorRef) => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                  }}
                />
              </StyledView>
            </Root>
          )}
        </Context.Consumer>
      </Provider>
    );
  }
}
