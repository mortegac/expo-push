// Vendor
import React, { PureComponent } from 'react';
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
import { height } from '../Helpers/size';

// Styles
const StyledButtonIconLabel = styled(View)`
  position: relative;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StyledView = styled(View)`
  display: flex;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: flex-start;
`;

const IconContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size / 2};
`;

const Label = styled(Text)`
  padding-right: ${props => (props.reverse ? height(20) : '0px')};
  /*
  padding-left: ${props => (props.reverse ? '0px' : height(46))};
  font-size: ${height(40)};
  font-family: 'Montserrat-Bold';
  */
  color: ${props => (props.color ? props.color : 'black')};
`;

export default class ButtonIconLabel extends PureComponent {
  // PropTypes
  static propTypes = {
    label: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    library: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.shape({}),
    styleLabel: PropTypes.shape({}),
  };

  // Default Prop Values
  static defaultProps = {
    color: '#000000',
    reverse: false,
    onPress: () => {},
    style: {},
    styleLabel: {},
  };

  // Render
  render() {
    // Constants
    const {
      label,
      reverse,
      library,
      name,
      size,
      color,
      onPress,
      style,
      styleLabel,
    } = this.props;

    // Render return
    return (
      <StyledButtonIconLabel style={style}>
        <TouchableOpacity onPress={onPress}>
          <StyledView reverse={reverse}>
            <IconContainer size={size}>
              <Icon library={library} name={name} size={size} color={color} />
            </IconContainer>
            <Label reverse={reverse} style={styleLabel}>{label}</Label>
          </StyledView>
        </TouchableOpacity>
      </StyledButtonIconLabel>
    );
  }
}
