import styled, { css } from 'styled-components/native';
import {Dimensions} from 'react-native';
import Constants from 'expo-constants';

const { statusBarHeight } = Constants;
const HEIGHT_DEVICE = Dimensions.get('window').height;

export const Container = styled.ScrollView`
  flex:1;
  position: relative;
  ${(props) => css`
    background-color: ${`${props.theme.colors.white}`};
  `}
`;
export const BackgroundImage = styled.ImageBackground`
  height:${`${HEIGHT_DEVICE}px`};
  margin-top: ${`${statusBarHeight}px`};
  align-items: center;
  padding:20px;
`;
export const ContainerTitleHooponopono = styled.View`
  width:100%;
  height:50px;
  border-radius: 4px;
  border-width: 1px;
  ${(props) => css`
    border-color: ${`${props.theme.colors.primary}`};
  `}
  margin-top:24px;
`;
export const TextInformation = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.secondary}`};
    font-size: ${`${props.theme.fontSize.informationText}`};
  `}
  font-family: 'indieF';
  margin-top: 16px;
`;
export const BoxInputs = styled.View`
  width:100%;
  height:200px;
  border-radius: 4px;
  border-width:1px;
  ${(props) => css`
    border-color: ${`${props.theme.colors.primary}`};
    background-color: ${`${props.theme.colors.white}`};
  `}
  margin-top: 8px;
  padding:20px;
  align-items: center;
  justify-content: center;
  margin-bottom:24px;
`;
export const ContainerTextInput = styled.View`
  height:30px;
  width:100%;
  border-bottom-width:1px;
  ${(props) => css`
    border-bottom-color: ${`${props.theme.colors.secondary}`};
  `}
`;
export const TextInput = styled.TextInput`
  flex:1;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${(props) => css`
    color: ${`${props.theme.colors.secondary}`};
  `}
  font-family: 'indieF';
  font-size:18px;
`;
export const ContainerHooponopono = styled.View`
  ${(props) => css`
    background-color: ${`${props.theme.colors.white}`};
  `}
  width:90%;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-bottom:24px;
`;
export const TextHooponopono = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.secondary}`};
  `}
  padding: 2px 10px ;
  font-family: 'indieF';
  font-size:18px;
  text-align: center;
`;
export const ContainerButton = styled.View`
  position: absolute;
  width:100%;
  left:20px;
  bottom: 20px;
  padding: 0px 20px;
`;