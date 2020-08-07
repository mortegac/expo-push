/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable global-require */
// Vendor
import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  View,
  TouchableOpacity,
  Alert,
  Linking,
  KeyboardAvoidingView,
  AsyncStorage,
  Keyboard,
  Text,
} from 'react-native';
import { Toast } from 'native-base';
import Constants from 'expo-constants';
import Button from '../Components/Button';
import NavigationService from '../NavigationService';

// Helpers
import { height } from '../Helpers/size';

// Styles
import {
  StyledView, StyledBackground, StyledWelcome, StyledLanguage, StyledLogo, StyledInput, StyledRegister, StyledRegisterText, StyledCheckbox, StyledFooter, StyledFooterButton, StyledFooterText, StyledVersion, StyledAfterSplash,
} from './LoginStyle';

const PageLogin = ({ navigation }) => {
  
  // console.log('<navigation>', navigation.state.params.clean);

  const [lastName, setLastName] = useState('');
  const [reservationNumber, setReservationNumber] = useState('');

  const redirect = () => {
    // console.log('redirect: ', NavigationService);

    if (lastName === 'veas' && reservationNumber === '230152') {
      NavigationService.navigate('Home');
    } else if (lastName === '' && reservationNumber === '') {
      // text: 'You must enter your last name and reservation number',
      Toast.show({
        text: 'Debe ingresar su apellido y número de reserva',
        position: 'top',
        duration: 3000,
      });
    } else {
      // text: 'Your reservation is not found',
      Toast.show({
        text: 'No se encuentra su reserva',
        position: 'bottom',
        duration: 3000,
        buttonText: 'Okay',
      });
    }

    // navigation.navigate('Home');
    // NavigationService.navigate('Home')
  };

  useEffect(() => {

    // if(navigation.state.params.clean){
      setLastName('');
      setReservationNumber('');
    // }
  }, []);

  return (
    <StyledView>
      <KeyboardAvoidingView
        behavior="position"
        enabled
      >
        <View
          style={{
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <StyledWelcome>Bienvenido</StyledWelcome>

          <StyledLogo width={parseInt(height(230), 10)} source={require('../assets/logo.png')} />

          <StyledInput
            placeholder="Apellido huésped"
            value={lastName}
            onChangeText={setLastName}
            autoCapitalize="none"
            // keyboardType="email-address"
          />

          <StyledInput
            placeholder="Número de reserva"
            value={reservationNumber}
            onChangeText={setReservationNumber}
            autoCapitalize="none"
          />
          <Button
            label="BUSCAR RESERVA"
            style={{
              width: parseInt(height(760), 10),
              height: parseInt(height(130), 10),
              marginTop: parseInt(height(16), 10),
              marginTottom: parseInt(height(20), 10),
            }}
            gradient={['#D48022', '#E69A46']}
            onPress={() => redirect()}
          />

        </View>
      </KeyboardAvoidingView>

      <StyledVersion>{Constants.manifest.version}</StyledVersion>
      <StyledLanguage>
        <Text>English</Text>
      </StyledLanguage>
    </StyledView>
  );
};

export default PageLogin;