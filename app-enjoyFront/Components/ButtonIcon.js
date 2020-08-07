// Vendor
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {
  View,
  TouchableOpacity,
} from 'react-native';

// Components
import Icon from './Icon';

// Styles
const StyledView = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.size / 2};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export default class ButtonIcon extends PureComponent {
  // PropTypes
  static propTypes = {
    library: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
  };

  // Default Prop Values
  static defaultProps = {
    color: '#000000',
    onPress: () => {},
    disabled: false,
  };

  // Render
  render() {
    // Constants
    const {
      onPress,
      disabled,
    } = this.props;

    // Render return
    return (
      <TouchableOpacity onPress={!disabled ? onPress : () => {}}>
        <StyledView {...this.props}>
          <Icon {...this.props} />
        </StyledView>
      </TouchableOpacity>
    );
  }
}
