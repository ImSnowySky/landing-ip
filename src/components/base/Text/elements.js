import styled, { css } from 'styled-components';

export const TextWrapper = styled.div`
  p, h1, h2, h3, h4, h5, span {
    padding: 0;
    margin: 0;
  }

  p, span {
    font-family: 'Golos-Regular', 'Arial', sans-serif;
    font-weight: normal;
  }

  h3, h4, h5 {
    font-family: 'Golos-Bold', 'Arial', sans-serif;
    font-weight: bold;
  }

  h1, h2 {
    font-family: 'Gilroy-ExtraBold', 'Open Sans', 'Roboto', sans-serif;
  }

  ${props => props.accent && css`
    p, h1, h2, h3, h4, h5, span {
      font-weight: 300;
      font-size: 36px;
      line-height: 42px;

      font-family: 'Gilroy-Light', 'Open Sans', 'Roboto', sans-serif;

      @media (max-width: 767px) {
        font-size: 24px;
        line-height: 28px;
      }
    }
  `}
`;