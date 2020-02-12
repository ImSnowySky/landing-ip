import styled from 'styled-components';

export const GridContainer = styled.div`
  margin-top: 64px;

  .grid {
    &--row {
      &:not(:first-child) {
        margin-top: 24px;
      }
    }
    &--cell {
      width: 568px;
      height: 250px;
    }
  }
`;