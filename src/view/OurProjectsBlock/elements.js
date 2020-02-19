import styled from 'styled-components';
import { ImageContainer, ContentContainer } from '../../components/combined/ProjectCard/elements';

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

  @media (max-width: 1023px) {
    margin-top: 52px;
  }

  .grid {
    &:hover .grid--row .grid--cell:not(:hover) {
      filter: blur(4px);

      @media (max-width: 1023px) { filter: none }
    }
    &--row {  
      &:not(:first-child) {
        .grid--cell { padding-top: 60px }
      }

      .grid--cell { transition: filter 250ms ease-in-out; }

      &:nth-child(odd) {
        .grid--cell {
          width: 378px;
          flex: none;
          ${ImageContainer} { height: 216px; }

          @media (max-width: 1279px) {
            width: 312px;
          }
        }
      }

      &:nth-child(even) {
        .grid--cell {
          width: 552px;
          flex: none;
          ${ImageContainer} { height: 200px; width: 264px; border-radius: 10px; }
          ${ContentContainer} {
            position: absolute;
            top: 0;
            left: 288px;
            width: 264px;
            margin-top: 0;
            height: 200px;
            justify-content: center;
          }

          @media (max-width: 1279px) {
            width: 468px;

            ${ImageContainer} { height: 152px; width: 216px; }
            ${ContentContainer} {
              left: 232px;
              height: 152px;
              width: 206px;
            }
          }
        }
      }

      @media (max-width: 1023px) {
        &:nth-child(odd), &:nth-child(even) {
          flex-direction: column;

          .grid--cell {
            flex: none;
            width: 100%;
            flex-direction: row;
            padding-top: 32px;

            & > div { flex-direction: row }

            ${ImageContainer} {
              width: 310px;
              height: 200px;
              border-radius: 8px;
              flex: none;
            }

            ${ContentContainer} {
              position: static;
              width: 336px;
              height: 200px;
              padding-left: 16px;
              justify-content: center;
              margin-top: 0;
              flex: none;
            }

            &:nth-child(even) {
              & > div { flex-direction: row-reverse; }

              ${ContentContainer} {
                text-align: right;
                padding-right: 16px;
              }
            }
          }
        }
      }

      @media (max-width: 767px) {
        &:nth-child(odd), &:nth-child(even) {
          .grid--cell {
            ${ImageContainer} {
              width: 252px;
              height: 152px;
            }

            ${ContentContainer} {
              position: static;
              width: 252px;
              height: 152px;
              padding-left: 16px;
              justify-content: center;
              margin-top: 0;
              flex: none;
            }
          }
        }
      }
    }
  }
`;