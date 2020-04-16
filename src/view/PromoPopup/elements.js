import styled from 'styled-components';

export const WhiteContainer = styled.div`
  position: fixed;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 476px;
  height: 56px;
  box-sizing: border-box;
  padding: 16px 24px;
  font-size: 18px;
  line-height: 24px;
  font-family: 'Golos-Medium';
  font-weight: 500;
  color: #242424;
  text-align: center;
  z-index: 10000;
  background: #fff;
  box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.25);
  border-radius: 84px;
  opacity: 0;
  transition: top 250ms ease-in-out, opacity 250ms ease-in-out;

  &.on-position {
    top: 80px;
    opacity: 1;
  }

  @media (max-width: 575px) {
    width: calc(100% - 48px);
    text-align: left;
    font-size: 12px;
    line-height: 18px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 42px;
  }
`;