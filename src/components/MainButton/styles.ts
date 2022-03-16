import styled, {css} from 'styled-components/native';

interface Props {
  marginBottom:number;
}

export const Container = styled.TouchableOpacity<Props>`
  flex:1;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  min-width: 216px;
  max-height: 60px;
  border-width: 1px;
  border-radius: 4px;
  ${(props) => css`
    margin-bottom: ${`${props.marginBottom || 0}px`};
    background-color: ${`${props.theme.colors.white}`};
    border-color:${`${props.theme.colors.primary}`};
  `}
`;
export const TextButton = styled.Text`
  font-size: 14px;
  font-family: 'indieF';
  ${(props) => css `
    color: ${`${props.theme.colors.primary}`}
  `}
`;