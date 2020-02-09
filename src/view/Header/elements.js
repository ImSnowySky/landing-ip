import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  background: ${({ onTop }) => onTop ? 'transparent' : 'white'};
  height: 96px;

  & > div {
    height: 100%;
    justify-content: center;
    flex-direction: row;
  }
`;

export const Logo = styled.div`
  margin: 0 auto 0 16px;
  width: 184px;
  height: 80px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Menu = styled.div`
  display: inline-flex;
  justify-self: flex-end;
`;