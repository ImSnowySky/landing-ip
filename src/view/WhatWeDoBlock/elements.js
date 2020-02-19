import styled from 'styled-components';
import { TitleContainer } from '../../components/base/shared';

export const GridContainer = styled.div`
  margin-top: 64px;

  @media (max-width: 1023px) {
    margin-top: 52px;
  }

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

    @media (max-width: 1023px) {
      &--row {
        flex-direction: column;
      }
      &--cell {
        flex: none;
        width: 100%;
        height: 224px;

        &:last-of-type {
          margin-top: 24px;
        }
      }
    }

    @media (max-width: 767px) {
      &--cell {
        height: 192px;
      }
    }

    @media (max-width: 567px) {
      &--cell {
        height: 316px;
      }
    }
  }
`;

export const TitleContainerWithMargin = styled(TitleContainer)`
  margin-top: 92px;

  @media (max-width: 1023px) {
    margin-top: 52px;
  }

  @media (max-width: 767px) {
    margin-top: 42px;
  }
`;