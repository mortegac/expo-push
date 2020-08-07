// Vendor
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  Fontisto,
  Feather,
} from '@expo/vector-icons';
import { Text } from 'react-native';

// Components
import { height } from '../Helpers/size';
// …

// Constants
// ..

export default class Icon extends PureComponent {
  // PropTypes
  static propTypes = {
    library: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  };

  // Render
  render() {
    // Constants
    const { library, size } = this.props;
    const rSize = parseInt(height(size), 10);

    // Render return
    if (library === 'Ionicons') return <Ionicons {...this.props} size={rSize} />;
    if (library === 'Entypo') return <Entypo {...this.props} size={rSize} />;
    if (library === 'AntDesign') return <AntDesign {...this.props} size={rSize} />;
    if (library === 'MaterialCommunityIcons') return <MaterialCommunityIcons {...this.props} size={rSize} />;
    if (library === 'FontAwesome') return <FontAwesome {...this.props} size={rSize} />;
    if (library === 'FontAwesome5') return <FontAwesome5 {...this.props} size={rSize} />;
    if (library === 'Fontisto') return <Fontisto {...this.props} size={rSize} />;
    if (library === 'Feather') return <Feather {...this.props} size={rSize} />;
    return <Text>Not found</Text>;
  }
}
