import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  position: ${({ scrolling }) => scrolling ? 'fixed' : 'absolute'};
  width: 100%;
  align-items: center;
  background: ${({ onTop }) => onTop ? 'transparent' : 'white'};
  height: 96px;
  z-index: 15;
  top: ${({ scrolling, onTop}) => !scrolling && !onTop ? window.screen.height : 0}px;
  left: 0%;

  & > div {
    height: 100%;
    justify-content: center;
    flex-direction: row;
  }

  @media (max-width: 1023px) {
    & > div { align-items: center; }
  }

  @media (max-width: 767px) {
    height: 56px;
  }
`;

export const Menu = styled.div`
  display: inline-flex;
  justify-self: flex-end;
  width: 507px;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-left: auto;

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

  @media (max-width: 1023px) {
    margin-right: -24px;
  }
`;