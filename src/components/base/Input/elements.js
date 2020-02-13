import styled, { css } from 'styled-components';

export const Star = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: red;
  margin-left: 2px;
`

export const PlaceHolder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  color: rgba(36, 36, 36, 0.8);
  font-family: 'Golos-Medium', 'Arial', sans-serif;

  transition: height 0.1s ease-in-out,
              font-size 0.1s ease-in-out,
              transform 0.1s ease-in-out,
              left 0.1s ease-in-out,
              padding 0.1s ease-in-out;

  ${props => props.onTop && css`
    height: 14px;
    font-size: 12px;
    line-height: 14px;
    background: #fff;
    padding: 0 8px;
    left: 8px;
    transform: translateY(-70%);
    width: auto;

    ${Star} {
      font-size: 12px;
      line-height: 14px;
      font-family: 'Golos-Medium', 'Arial', sans-serif;
    }
  `};

  ${props => props.error && css`
    color: #C93836;
  `};
`;

export const Error = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 16px;
  font-size: 12px;
  line-height: 14px;
  color: #C93836;
`;

export const RealInput = styled.input`
  border: 0;
  outline: none;
  position: absolute;
  top: 5px;
  left: 2px;
  width: calc(100% - 4px);
  height: calc(100% - 6px);
  padding: 16px;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border-radius: 8px;
  font-family: 'Golos-Medium', 'Arial', sans-serif;
`;

export const InputControll = styled.div`
  width: 100%;
  height: 56px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #DADADA;
  border-radius: 8px;
  position: relative;
  top: 0;
  left: 0;
  background: #fff;

  transition: border 0.1s ease-in-out;

  ${props => props.focused && css`
    border: 2px solid #242424;
  `};

  ${props => props.error && css`
    border-color: #C93836;
  `};
`;