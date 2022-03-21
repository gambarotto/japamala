import styled, { css } from 'styled-components/native';

interface TextProps {
  reduceFont: boolean;
}

export const Container = styled.Text<TextProps>`
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