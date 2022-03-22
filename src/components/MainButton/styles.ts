import styled, {css} from 'styled-components/native';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../helpers/sizeCalculator';

interface Props {
  marginBottom:number;
}

export const Container = styled.TouchableOpacity<Props>`
  flex:1;
  justify-content: center;
  align-items: center;
  padding-top: ${pixelSizeVertical(20) + 'px'};
  padding-bottom: ${pixelSizeVertical(20) + 'px'};
  padding-left: ${pixelSizeHorizontal(40) + 'px'};
  padding-right: ${pixelSizeHorizontal(40) + 'px'};
  min-width: ${widthPixel(236) + 'px'};
  max-height: ${heightPixel(80) + 'px'};
  border-width: 1px;
  border-radius: 4px;
  ${(props) => css`
    margin-bottom: ${`${pixelSizeVertical(props.marginBottom) || 0}px`};
    background-color: ${`${props.theme.colors.white}`};
    border-color:${`${props.theme.colors.primary}`};
  `}
`;
export const TextButton = styled.Text`
  font-size: ${fontPixel(18) + 'px'};
  font-family: 'indieF';
  ${(props) => css `
    color: ${`${props.theme.colors.primary}`}
  `}
`;