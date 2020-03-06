import styled from 'styled-components';

export const LogoContainer = styled.div`
  width: 184px;
  margin-left: -4px;
  height: 96px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 100%;
  }

  @media (max-width: 1023px) {
    width: 128px;
    height: 56px;
  }

  @media (max-width: 767px) {
    width: 80px;
    height: 34px;
  }
`;