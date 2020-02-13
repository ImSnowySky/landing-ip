import styled from 'styled-components';
import { TitleContainer } from '../../components/base/shared';

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

export const TitleContainerWithMargin = styled(TitleContainer)`
  margin-top: 92px;
`;