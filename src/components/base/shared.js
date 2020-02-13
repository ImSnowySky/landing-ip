import styled from 'styled-components';

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction = 'column' }) => direction};
  position: relative;
  top: 0;
  left: 0;
  width: 1280px;
  padding: 0 76px;
  z-index: 5;
  box-sizing: border-box;
  margin: ${({ withMargin }) => withMargin ? 72 : 0}px auto;
`;

export const TitleContainer = styled.div`
  width: 100%;
  color: #242424;
  text-align: center;

  h2 {
    font-size: 32px;
    line-height: 32px;
    font-weight: 800;
  }
`;