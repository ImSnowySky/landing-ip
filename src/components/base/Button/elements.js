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
  border: 2px solid #C96936;

  transition: background 0.2s ease-in-out;

  ${props => props.hover && css`
    background: #C96936;

    .btn-text {
      color: #fff !important;
    }
  `}

  .btn-text {
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    transition: color 0.2s ease-in-out;
  }
`;