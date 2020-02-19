import styled from 'styled-components';

export const FooterWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 160px;
  background: #3D3D3D;
  display: flex;
  align-items: center;

  @media (max-width: 567px) {
    & > div {
      flex-direction: column;

      img { margin-left: -6px }
    }
  }
`;

export const FooterContent = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #fff;

  display: flex;
  justify-content: center;
  flex-direction: column;

  &:nth-of-type(2) {
    margin-right: 204px;

    @media (max-width: 1279px) {
      margin-right: 60px;
    }

    @media (max-width: 767px) {
      margin-right: 25px;
    }
  }

  &:nth-of-type(3) {
    margin-right: 172px;

    @media (max-width: 1279px) {
      margin-right: 130px;
    }

    @media (max-width: 1023px) {
      display: none;
    }
  }

  & > div {
    span {
      font-family: 'Golos-Regular', 'Open Sans', sans-serif;
    }

    a {
      color: #fff;
      font-size: 15px;
      line-height: 19px;
      text-decoration: underline;
      font-family: 'Golos-Regular', 'Open Sans', sans-serif;

      @media (max-width: 767px) {
        font-size: 14px;
      }
    }

    &:last-child { margin-top: 8px }
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;