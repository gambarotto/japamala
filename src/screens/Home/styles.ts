import styled from 'styled-components/native';
import {
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../helpers/sizeCalculator';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${`${pixelSizeVertical(20)}px`};
  padding-bottom: ${`${pixelSizeVertical(20)}px`};
  padding-left: ${`${pixelSizeHorizontal(20)}px`};
  padding-right: ${`${pixelSizeHorizontal(20)}px`};
`;
export const Logo = styled.Image`
  width: ${`${widthPixel(150)}px`};
  height: ${`${heightPixel(190)}px`};
  margin-bottom: ${`${pixelSizeVertical(24)}px`};
`;
