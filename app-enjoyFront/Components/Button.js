// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Helpers
import { height } from '../Helpers/size';

// Styles
const StyledView = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${height(8)};
  border: 1px solid #D48022;
  background-color: #D48022;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

const StyledText = styled(Text)`
  width: 100%;
  font-family: 'Montserrat-SemiBold';
  font-size: ${height(32)};
  letter-spacing: ${height(2)};
  text-align: center;
  color: #ffffff;
`;

const StyledGradient = styled(LinearGradient)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Button = ({
  label,
  disabled,
  style,
  styleLabel,
  gradient,
  onPress,
}) => (
  <TouchableOpacity onPress={!disabled ? onPress : () => {}}>
    <StyledView style={style} disabled={disabled}>
      {gradient && <StyledGradient colors={gradient} />}
      <StyledText style={styleLabel}>{label}</StyledText>
    </StyledView>
  </TouchableOpacity>
);

// PropTypes
Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.shape({}),
  styleLabel: PropTypes.shape({}),
  gradient: PropTypes.arrayOf(PropTypes.string),
  onPress: PropTypes.func,
};

// Default Prop Values
Button.defaultProps = {
  label: 'Button',
  disabled: false,
  style: {},
  styleLabel: {},
  gradient: null,
  onPress: () => {},
};

export default Button;
