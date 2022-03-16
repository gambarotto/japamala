import { FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';

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

export const Container = styled.View`
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