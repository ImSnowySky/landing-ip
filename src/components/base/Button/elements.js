import styled, { css } from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 28px;
  border: 2px solid ${({ primary = false }) => primary ? 'transparent' : '#C96936'};
  background: ${({ primary = false }) => primary ? '#fff' : 'transparent'};

  transition: background 0.2s ease-in-out;
  cursor: pointer;

  ${props => {
    if (props.hover && !props.disabled) return css`
    background: #C96936;

    .btn-text {
      color: #fff !important;
    }
  `}};

  ${props => props.disabled && css`
    background: #fff;
    border: 1px solid #DADADA;
    pointer-events: none;

    .btn-text {
      color: rgba(36, 36, 36, 0.4) !important;
    }
  `};

  .btn-text {
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    transition: color 0.2s ease-in-out;
    font-family: 'Golos-Bold', 'Arial', sans-serif;
  }

  @media (max-width: 767px) {
    .btn-text {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;