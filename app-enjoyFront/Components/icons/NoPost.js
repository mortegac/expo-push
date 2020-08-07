/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import styled from 'styled-components/native';

import { height } from '../../Helpers/size';

// const TitleSvg = styled(Text)`
//   font-family: 'Montserrat-Bold';
//   font-size: ${height(60)};
//   text-align: center;
//   color: #494949;
// `;
const ViewSvg = styled(View)`
  margin-left: ${height(60)};
  margin-right: ${height(60)};
  margin-top: ${height(60)};
`;
const TextSvg = styled(Text)`
  font-family: 'Montserrat-Regular';
  font-size: ${height(60)};
  text-align: center;
  color: #494949;
`;

const NoPost = (props) => (
  <ViewSvg {...props.style}>
    <Svg
      xmlns="http://www.w3.org/2000/Svg"
      width={props.width || '305'}
      height={props.height || '215'}
      fill="none"
      viewBox="0 0 205 115"
    >
      <Path
        fill="#EBEBEB"
        d="M140.003 105.7c19.885 0 36.004-1.052 36.004-2.35S159.888 101 140.003 101c-19.884 0-36.003 1.052-36.003 2.35s16.119 2.35 36.003 2.35z"
      />
      <Path
        fill="#EBEBEB"
        stroke="#092A3B"
        strokeMiterlimit="10"
        strokeWidth="0.5"
        d="M40.034 57.56c3.834.055 7.668-1.105 10.682-3.151V28.31C50.716 21.515 57.073 16 64.905 16h47.509-3.09c7.832 0 14.189 5.515 14.189 12.31v28.55c0 6.795-6.357 12.31-14.189 12.31h3.09-47.51c-4.25 0-8.07-1.62-10.669-4.202C49.417 64.476 44.7 62.966 41.32 60c-.756-.656-1.488-1.52-1.286-2.44z"
      />
      <Path
        fill="#fff"
        d="M75.953 46.235c2.32 0 4.2-1.632 4.2-3.644 0-2.013-1.88-3.644-4.2-3.644-2.32 0-4.2 1.631-4.2 3.644 0 2.012 1.88 3.644 4.2 3.644zM88.313 46.235c2.319 0 4.2-1.632 4.2-3.644 0-2.013-1.881-3.644-4.2-3.644-2.32 0-4.2 1.631-4.2 3.644 0 2.012 1.88 3.644 4.2 3.644zM100.168 46.235c2.319 0 4.2-1.632 4.2-3.644 0-2.013-1.881-3.644-4.2-3.644-2.32 0-4.2 1.631-4.2 3.644 0 2.012 1.88 3.644 4.2 3.644z"
      />
      <Path
        fill="#EBEBEB"
        stroke="#092A3B"
        strokeMiterlimit="10"
        strokeWidth="0.431"
        d="M177.378 77.98c-3.304.054-6.596-.953-9.207-2.715V52.778c0-5.854-5.473-10.603-12.221-10.603h-40.938 2.661c-6.747 0-12.221 4.749-12.221 10.603v24.6c0 5.854 5.474 10.603 12.221 10.603h-2.661 40.926c3.67 0 6.949-1.4 9.194-3.611 4.149-.416 8.21-1.73 11.124-4.279.668-.569 1.299-1.313 1.122-2.112z"
      />
      <Path
        fill="#fff"
        d="M146.428 68.207c1.993 0 3.607-1.4 3.607-3.13 0-1.727-1.614-3.129-3.607-3.129-1.992 0-3.607 1.401-3.607 3.13 0 1.728 1.615 3.13 3.607 3.13zM135.784 68.207c1.992 0 3.607-1.4 3.607-3.13 0-1.727-1.615-3.129-3.607-3.129-1.992 0-3.607 1.401-3.607 3.13 0 1.728 1.615 3.13 3.607 3.13zM125.568 68.207c1.992 0 3.607-1.4 3.607-3.13 0-1.727-1.615-3.129-3.607-3.129-1.992 0-3.607 1.401-3.607 3.13 0 1.728 1.615 3.13 3.607 3.13z"
      />
      <Path
        fill="#EBEBEB"
        d="M103.025 107c36.387 0 65.885-1.377 65.885-3.075 0-1.698-29.498-3.075-65.885-3.075s-65.885 1.377-65.885 3.075c0 1.698 29.498 3.075 65.885 3.075z"
      />
    </Svg>
    <TextSvg>You haven't created any yet. Click here to get started</TextSvg>
  </ViewSvg>

);

export default NoPost;
