import styled from 'styled-components/native';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import * as Animatable from 'react-native-animatable';
import { height } from '../Helpers/size';

export const StyledView = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const StyledBackground = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;


export const StyledWelcome = styled(Text)`
  font-family: 'Montserrat-Light';
  margin-top: ${height(300)};
  font-size: ${height(100)};
  color: #6F6F71;
`;

export const StyledGuest = styled(Text)`
  font-family: 'Montserrat-Light';
  margin-top: ${height(300)};
  font-size: ${height(60)};
  color: #6F6F71;
`;

export const StyledLogo = styled(AutoHeightImage)`
  margin-top: ${height(86)};
  margin-bottom: ${height(100)};
`;

export const StyledInput = styled(TextInput)`
  width: ${height(760)};
  height: ${height(100)};
  margin-bottom: ${height(40)};
  background: #ffffff;
  border-radius: ${height(16)};
  border: 1px solid #E69A46;
  font-family: 'Montserrat-Light';
  font-size: ${height(40)};
  text-align: center;
`;

export const StyledRegister = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${height(724)};
  margin-top: ${height(8)};
`;

export const StyledRegisterText = styled(Text)`
  padding-top: ${height(32)};
  font-family: 'Montserrat-Bold';
  font-size: ${height(33)};
  color: #ffffff;
`;

export const StyledCheckbox = styled(View)`
  width: ${height(48)};
  height: ${height(48)};
  margin-top: ${height(32)};
  margin-right: ${height(32)};
  border: 1px solid white;
  background-color: ${(props) => (props.checked ? '#9ca73b' : 'transparent')};
`;

/* Footer */
export const StyledFooter = styled(Animatable.View)`
  align-items: center;
  justify-content: center;
  position: absolute;
  flex-direction: row;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${height(210)};
  background-color: rgba(216, 217, 132, 0.3);
  z-index: 1;
`;

export const StyledFooterButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledFooterText = styled(Text)`
  font-family: 'Montserrat-SemiBold';
  font-size: ${height(30)};
  letter-spacing: ${height(4)};
  margin-left: ${height(24)};
  color: #ffffff;
`;

export const StyledVersion = styled(Text)`
  position: absolute;
  right: ${height(80)};
  top: ${height(16)};
  font-family: 'Montserrat-SemiBold';
  font-size: ${height(32)};
  letter-spacing: ${height(2)};
  text-align: center;
  color: #6F6F71;
  opacity: 0.5;
  z-index: 2;
`;
export const StyledLanguage = styled(TouchableOpacity)`
  position: absolute;
  right: ${height(80)};
  top: ${height(90)};
  font-family: 'Montserrat-SemiBold';
  font-size: ${height(32)};
  letter-spacing: ${height(2)};
  text-align: center;
  color: #6F6F71;
  opacity: 0.5;
  z-index: 2;
`;

export const StyledAfterSplash = styled(Animatable.Image)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
