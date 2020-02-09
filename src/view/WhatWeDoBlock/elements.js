import styled from 'styled-components';

export const TitleContainer = styled.div`
  width: 100%;
  color: #242424;
  text-align: center;

  h2 {
    font-size: 32px;
    line-height: 32px;
    font-weight: 800;
  }
`;

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