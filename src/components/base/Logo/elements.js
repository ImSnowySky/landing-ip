import styled from 'styled-components';

export const LogoContainer = styled.div`
  width: 184px;
  margin-left: -4px;
  margin-right: auto;
  height: 96px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1023px) {
    width: 128px;
    height: 58px;
  }
`;