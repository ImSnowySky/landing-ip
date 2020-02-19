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

  @media (max-width: 1279px) {
    width: 1024px;
    padding: 0 44px;
  }

  @media (max-width: 1023px) {
    width: 768px;
    margin: ${({ withMargin }) => withMargin ? 60 : 0}px auto;
    padding: 0 40px;
  }

  @media (max-width: 767px) {
    width: 568px;
    padding: 0 24px;
    margin: ${({ withMargin }) => withMargin ? 48 : 0}px auto;
  }

  @media (max-width: 567px) {
    width: 375px;
  }

  @media (max-width: 374px) {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  color: #242424;
  text-align: center;

  h2 {
    font-size: 32px;
    line-height: 40px;
    font-weight: 800;

    @media (max-width: 567px) {
      font-size: 26px;
      line-height: 34px;
    }
  }
`;