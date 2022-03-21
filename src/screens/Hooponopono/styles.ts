import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

const HEIGHT_DEVICE = Dimensions.get('window').height;

interface TextProps {
  reduceFont: boolean;
}

export const Container = styled.TouchableOpacity`
  flex:1;
`;
export const ImageBackground = styled.ImageBackground`
  flex: 1;
  padding:20px;
  align-items: center;
  position: relative;
`;
export const ContainerHooponopono = styled.View`
  position: absolute;
  width:100%;
  bottom: ${`${HEIGHT_DEVICE / 3.5}px`};
`;
export const CountNumber = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.white}`};
    font-size: ${`${props.theme.fontSize.numberHooponopono}`};
  `}
  font-family: 'gloriaH';
  text-align: center;
  margin-bottom:24px;
`;
export const TextHooponopono = styled.Text<TextProps>`
  ${(props) => css`
    color: ${`${props.theme.colors.white}`};
  `}
  ${props => !props.reduceFont
    ? css` font-size: ${`${props.theme.fontSize.mainText} `}; `
    : css ` font-size: 12px;`
  }
  font-family: 'gloriaH';
  text-align: center;
`;