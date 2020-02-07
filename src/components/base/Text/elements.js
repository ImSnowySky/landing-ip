import styled, { css } from 'styled-components';

export const TextWrapper = styled.div`
  p, h1, h2, h3, h4, h5, span {
    padding: 0;
    margin: 0;
  }

  ${props => props.accent && css`
    p, h1, h2, h3, h4, h5, span {
      font-weight: 300;
      font-size: 36px;
      line-height: 42px;
    }
  `}
`;