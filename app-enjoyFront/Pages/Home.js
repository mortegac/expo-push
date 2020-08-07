
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
import Constants from 'expo-constants';
import Button from '../Components/Button';
import NavigationService from '../NavigationService';

// Helpers
import { height } from '../Helpers/size';

// Styles
import {
  StyledView, StyledBackground, StyledWelcome, StyledGuest, StyledLanguage, StyledLogo, StyledInput, StyledRegister, StyledRegisterText, StyledCheckbox, StyledFooter, StyledFooterButton, StyledFooterText, StyledVersion, StyledAfterSplash,
} from './LoginStyle';

const PageHome = ({ navigation }) => {

  const redirect = (route) => {

    navigation.navigate(route, { clean: true });
  };

  return (
    <StyledView>
      <View
        style={{
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <StyledGuest>Guest:</StyledGuest>
        <StyledWelcome style={{ 
            color: '#E69A46',
            marginTop:  parseInt(height(60), 10),
        }}>USUARIO</StyledWelcome>
        <StyledLogo
          style={{ marginTop: 100 }}
          width={parseInt(height(230), 10)}
          source={require('../assets/logo.png')}
        />
      </View>
      <Button
        label="Cerrar Sesión"
        style={{
          width: parseInt(height(760), 10),
          height: parseInt(height(130), 10),
          marginTop: parseInt(height(16), 10),
          marginTottom: parseInt(height(20), 10),
        }}
        gradient={['#c0c0c2', '#c0c0c2']}
        onPress={() => redirect('Login')}
      />

      <StyledLanguage>
        <Text>English</Text>
      </StyledLanguage>
    </StyledView>
  );
};

export default PageHome;
