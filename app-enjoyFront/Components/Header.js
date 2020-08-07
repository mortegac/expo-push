/* eslint-disable global-require */
// Vendor
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

// Components
import Icon from './Icon';
import NavigationService from '../NavigationService';

// Helpers
import { height } from '../Helpers/size';

// Styles
const StyledHeader = styled(View)`
  width: 100%;
  height: ${height(184)};
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  borderBottomWidth: 1;
  borderBottomColor: #cecece;
  z-index: 10;
`;

const StyledIconMenu = styled(TouchableOpacity)`
  position: absolute;
  left: ${height(33)};
`;

const StyledIconLogo = styled(Image)`
  margin-top: 35px;
  width: ${height(100)};
  height: ${height(100)};
  resize-mode: contain;
`;

const StyledIconUserTouchableOpacity = styled(TouchableOpacity)`
  position: absolute;
  right: ${height(33)};
`;

export default class Header extends PureComponent {
  // PropTypes
  static propTypes = {
    setMenu: PropTypes.func.isRequired,
  };


  // Functions
  toggleOpen = () => {
    const { setMenu } = this.props;
    setMenu(true);
  };

  // Render
  render() {
    return (
      <StyledHeader>
        <StyledIconMenu onPress={this.toggleOpen}>
          <Icon library="MaterialCommunityIcons" name="menu" size={104} color="#000000" />
        </StyledIconMenu>
        <TouchableOpacity onPress={() => NavigationService.navigate('Home')}>
          <StyledIconLogo source={require('../assets/logo-icon.png')} />
        </TouchableOpacity>
        <StyledIconUserTouchableOpacity onPress={() => NavigationService.navigate('Profile')}>
          <Icon library="FontAwesome" name="user-circle-o" size={104} color="#a6a6a6" />
        </StyledIconUserTouchableOpacity>
      </StyledHeader>
    );
  }
}
