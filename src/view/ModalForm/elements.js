import styled from'styled-components';
import close from './assets/close.svg';

export const ModalView = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  overflow: hidden;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
`;

export const CloseButton = styled.div`
  width: 72px;
  height: 72px;
  z-index: 1000;
  position: absolute;
  top: 36px;
  right: 36px;
  background-image: url(${close});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.25);
  }

  @media (max-width: 1439px) {
    width: 36px;
    height: 36px;
    top: 24px;
    right: 24px;
  }
`;