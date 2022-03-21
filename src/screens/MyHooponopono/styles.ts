import { FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

interface ItensProps {
  title: string;
  hooponopono: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    line5: string;
  }
}

export const Container = styled.ImageBackground`
  flex: 1;
  padding:20px;
  align-items: center;
`;
export const TextInformation = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.secondary}`};
    font-size: ${`${props.theme.fontSize.informationText}`};
  `}
  font-family: 'indieF';
  margin-top: 24px;
  text-align: center;
`;
export const HooponoponoList = styled(FlatList as new () => FlatList<ItensProps>)``;
export const ContainerItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  width:100%;
  border-radius: 4px;
  padding: 0px 10px;
  border-bottom-width:0.5px;
  ${(props) => css`
    border-bottom-color: ${`${props.theme.colors.gray5}`};
    background-color: ${`${props.theme.colors.white}`};
  `}
`;
export const ContainerTitleItem = styled.TouchableOpacity`
  flex:1;
  justify-content: center;
  align-items: flex-start;
`;
export const TitleItem = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.primary}`};
    font-size: ${`${props.theme.fontSize.mainText}`};
  `}
  font-family: 'indieF';
`;
export const ContainerIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width:80px;
`;
export const ContainerIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const Icon = styled(MaterialIcons)`
`;
export const ModalContainer = styled.View`
  width: 90%;
  height: 200px;
  border-radius: 4px;
  ${(props) => css`
    background-color: ${`${props.theme.colors.white}`};
  `}
`;
export const ModalTitle = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.secondary}`};
    font-size: ${`${props.theme.fontSize.mainText}`};
  `}
  font-family: 'gloriaH';
  margin-top: 8px;
  text-align: center;
`;
export const ModalText = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.secondary}`};
    font-size: ${`${props.theme.fontSize.informationText}`};
  `}
  font-family: 'indieF';
  margin-top: 24px;
  text-align: center;
  padding: 0px 16px;
`;
export const ModalContainerButtons = styled.View`
  flex: 1;
  padding: 0px 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 8px;
`;
export const ModalContainerCancelButton = styled.TouchableOpacity`
  flex:1;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  max-height: 60px;
  border-radius: 4px;
  margin-right: 4px;
`;
export const ModalTextCancelButton = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.secondary}`};
    font-size: ${`${props.theme.fontSize.textButtom}`};
  `}
  font-family: 'indieF';
  text-align: center;
`;
export const ModalContainerDeleteButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  max-height: 60px;
  border-radius: 4px;
  margin-left: 4px;
  ${(props) => css`
    background-color: ${`${props.theme.colors.red}`};
  `}
`;
export const ModalTextDeleteButton = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.white}`};
    font-size: ${`${props.theme.fontSize.textButtom}`};
  `}
  font-family: 'indieF';
  text-align: center;
`;