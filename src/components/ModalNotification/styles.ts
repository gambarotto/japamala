import styled, { css } from 'styled-components/native';
import Modal from 'react-native-modal';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../helpers/sizeCalculator';

export const Container = styled(Modal)``;

export const ModalContainer = styled.View`
  width: 90%;
  height: ${`${heightPixel(250)}px`};
  border-radius: 4px;
  ${(props) => css`
    background-color: ${`${props.theme.colors.white}`};
  `}
`;
export const Title = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.secondary}`};
    font-size: ${`${props.theme.fontSize.mainText}`};
  `}
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-top: 8px;
  text-align: center;
`;
export const TextInformation = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.secondary}`};
    font-size: ${`${props.theme.fontSize.informationText}`};
  `}
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: ${`${pixelSizeVertical(30)}px`};
  text-align: center;
  padding-top: ${`${pixelSizeVertical(0)}px`};
  padding-bottom: ${`${pixelSizeVertical(0)}px`};
  padding-left: ${`${pixelSizeHorizontal(16)}px`};
  padding-right: ${`${pixelSizeHorizontal(16)}px`};
`;
export const ContainerButtons = styled.View`
  flex: 1;
  padding-top: ${`${pixelSizeVertical(0)}px`};
  padding-bottom: ${`${pixelSizeVertical(0)}px`};
  padding-left: ${`${pixelSizeHorizontal(8)}px`};
  padding-right: ${`${pixelSizeHorizontal(8)}px`};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${`${pixelSizeVertical(8)}px`};
`;
export const ModalContainerCancelButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${`${pixelSizeVertical(20)}px`};
  padding-bottom: ${`${pixelSizeVertical(20)}px`};
  padding-left: ${`${pixelSizeHorizontal(40)}px`};
  padding-right: ${`${pixelSizeHorizontal(40)}px`};
  max-height: ${`${heightPixel(70)}px`};
  border-radius: 4px;
  margin-right: ${`${pixelSizeHorizontal(4)}px`};
`;
export const ModalTextCancelButton = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.secondary}`};
    font-size: ${`${props.theme.fontSize.mainText}`};
  `}
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
`;
export const ModalContainerDeleteButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${`${pixelSizeVertical(20)}px`};
  padding-bottom: ${`${pixelSizeVertical(20)}px`};
  padding-left: ${`${pixelSizeHorizontal(40)}px`};
  padding-right: ${`${pixelSizeHorizontal(40)}px`};
  max-height: ${`${heightPixel(70)}px`};
  border-radius: 4px;
  margin-right: ${`${pixelSizeHorizontal(4)}px`};
  ${(props) => css`
    background-color: ${`${props.theme.colors.red}`};
  `}
`;
export const ModalTextDeleteButton = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.white}`};
    font-size: ${`${props.theme.fontSize.mainText}`};
  `}
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
`;
