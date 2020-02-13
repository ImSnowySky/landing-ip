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
  }

  &:nth-of-type(3) {
    margin-right: 172px;
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
    }

    &:last-child { margin-top: 8px }
  }
`;