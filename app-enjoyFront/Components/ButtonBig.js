// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

// Components
import Icon from './Icon';

// Helpers
import { width, height } from '../Helpers/size';

// Constants
// ..

// Styles
const StyledView = styled(View)`
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.withIcon ? 'flex-start' : 'center')};
  width: ${height(860)};
  height: ${height(220)};
  margin-bottom: ${height(30)};
  border-radius: ${width(16)};
  border: #72903e;
  background-color: white;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  left: 19%;
`;

const StyledText = styled(Text)`
  margin-left: ${(props) => (props.withIcon ? height(250) : 0)};
  font-family: 'Montserrat-Black';
  font-size: ${height(38)};
  color: #72903e;
`;

const ButtonBig = ({
  label,
  icon,
  onPress,
  disabled,
}) => (
  <TouchableOpacity onPress={!disabled ? onPress : () => {}}>
    <StyledView withIcon={icon !== null} disabled={disabled}>
      {icon && (
        <StyledIcon library={icon.library} name={icon.name} size={60} color="#72903e" />
      )}
      <StyledText withIcon={icon !== null}>
        {label}
      </StyledText>
    </StyledView>
  </TouchableOpacity>
);

// PropTypes
ButtonBig.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.shape({
    library: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

// Default Prop Values
ButtonBig.defaultProps = {
  label: 'Button',
  icon: null,
  onPress: () => {},
  disabled: false,
};

export default ButtonBig;
