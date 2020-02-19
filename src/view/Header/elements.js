import styled from 'styled-components';
import menuLight from './assets/menu-light.svg';
import menuDark from './assets/menu-dark.svg';
import modalMenuBG from '../WelcomeBlock/assets/bg.svg';
import closeIcon from './assets/close.svg';

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

  @media (max-width: 1023px) {
    & > div { align-items: center; }
  }

  @media (max-width: 767px) {
    height: 56px;
  }
`;

export const ModalMenu = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  background-image: url(${modalMenuBG});
  background-size: cover;
  background-position: center;
`;

export const InnerModalMenu = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 360px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 375px) {
    width: 320px;
  }
`;

export const CloseMenuIcon = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  right: 20px;
  background-image: url(${closeIcon});
  background-size: cover;
  z-index: 10;
  transition: transform 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.25);
  }

  @media (max-width: 375px) {
    right: 36px;
  }
`;

export const ModalMenuItems = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;

  ul {
    height: 100%;
    align-items: center;
    justify-content: center;

    li {
      flex: none;

      a {
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 40px;
      }
    }
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

export const MenuIcon = styled.div`
  width: 18px;
  height: 12px;
  background-image: ${({ variation = 'light' }) => `url(${variation === 'light' ? menuLight : menuDark})`};
  transition: transform 250ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.25);
  }
`;