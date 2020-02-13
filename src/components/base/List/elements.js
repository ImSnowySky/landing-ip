import styled, { css } from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: ${({ direction = 'row' }) => direction};
  padding: 0;
  margin: 0;
`;

export const ListElement = styled.li`
  display: flex;
  flex: 1 1 auto;
  justify-content: ${({ direction = 'row'}) => direction === 'row' ? 'center' : null};
  align-items: ${({ direction = 'row'}) => direction === 'column' ? 'center' : null};
  position: relative;
  top: 0;
  left: 0;

  a {
    font-family: 'Golos-Medium', 'Arial', sans-serif;
  }

  ${({ active, direction = 'row' }) => {
    if (active && direction === 'row') return css`
      &::after {
        content: '';
        width: 6px;
        height: 6px;
        background: #C96936;
        position: absolute;
        top: calc(100% + 8px);
        left: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
      }
    `
    else if (active && direction === 'column') return css`
      &::before {
        content: '';
        width: 6px;
        height: 6px;
        background: #C96936;
        border-radius: 50%;
        margin: 0 8px 0 -14px;
      }
    `
  }}
`;