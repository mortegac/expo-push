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
  Image,
  StyleSheet
} from 'react-native';
import Constants from 'expo-constants';
import Button from '../Components/Button';
import NavigationService from '../NavigationService';
import Icon from '../Components/Icon';
import { height } from '../Helpers/size';

import {
  StyledView, 
  StyledRegisterText, 
  StyledGuest, 
  StyledLogo, 
  StyledBackground, 
  StyledWelcome, 
  StyledLanguage, 
  StyledInput, 
  StyledRegister, 
  StyledCheckbox, 
  StyledFooter, 
  StyledFooterButton,
  StyledFooterText, 
  StyledVersion, 
  StyledAfterSplash,
} from './LoginStyle';


const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
  }
});

const PageNotification = ({ navigation }) => {
  const redirect = (route) => {
    console.log('redirect: ', navigation);

    navigation.navigate(route);
  };

  return (
    <StyledView style={{ backgroundColor: '#D48022' }}>
      <View
        style={{
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <View style={styles.imageContainer} style={{ height:300, marginBottom:20 }}>
          <Image style={styles.image} resizeMode='contain' source={require('../assets/piscina2.png')} />
        </View>

        <Icon
          library="AntDesign"
          name={'checkcircleo'}
          color="#FFF"
          size={240}
        />
        <StyledGuest style={{ 
          color: '#FFF',
          marginTop: 5,
        }}>USUARIO</StyledGuest>
        <StyledRegisterText style={{ 
          color: '#FFF',
        }}>Su hijo XXX Veas tiene pase liberado a la Piscina</StyledRegisterText>

      </View>

      <Button
        label="ACEPTAR"
        style={{
          width: parseInt(height(760), 10),
          height: parseInt(height(130), 10),
          marginTop: parseInt(height(16), 10),
          marginTottom: parseInt(height(20), 10),
          borderWidth: 1,
        }}
        onPress={() => redirect('Home')}
      />
      
    </StyledView>
  );
};

export default PageNotification;
