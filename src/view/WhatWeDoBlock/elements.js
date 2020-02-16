import styled from 'styled-components';
import { TitleContainer } from '../../components/base/shared';

export const GridContainer = styled.div`
  margin-top: 64px;

  .grid {
    &--row {
      &:not(:first-child) {
        margin-top: 24px;
      }

      @media (max-width: 1023px) {
        flex-direction: column;
      }
    }
    &--cell {
      width: 568px;
      height: 250px;

      @media (max-width: 1023px) {
        width: 100%;

        &:not(:first-child) {
          margin-top: 24px;
        }
      }
    }
  }
`;

export const TitleContainerWithMargin = styled(TitleContainer)`
  margin-top: 92px;
`;