import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  position: ${({ scrolling }) => scrolling ? 'fixed' : 'absolute'};
  width: 100%;
  align-items: center;
  background: ${({ onTop }) => onTop ? 'transparent' : 'white'};
  height: 96px;
  z-index: 15;
  top: ${({ scrolling, onTop}) => !scrolling && !onTop ? window.innerHeight : 0}px;
  left: 0%;

  & > div {
    height: 100%;
    justify-content: center;
    flex-direction: row;
  }
`;

export const Logo = styled.div`
  margin: 0 auto 0 16px;
  width: 184px;
  height: 96px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Menu = styled.div`
  display: inline-flex;
  justify-self: flex-end;
  width: 507px;
  height: 100%;
  justify-content: center;
  align-items: center;

  ul { height: 17px; }

  ul:hover li:not(:hover) {
    filter: blur(2px);
  }

  li {
    transition: filter 250ms ease-in-out;
    font-size: 14px;
    line-height: 17px;

    a {
      text-decoration: none;
      color: ${({ onTop }) => onTop ? '#fff' : '#242424'};
      transition: color 250ms ease-in-out;
    }

    &:hover a {
      color: #C96936;
    }
  }
`;