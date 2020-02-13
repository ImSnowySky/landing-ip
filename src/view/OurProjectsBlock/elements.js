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

  .grid {
    &:hover .grid--row .grid--cell:not(:hover) {
        filter: blur(4px);
    }
    &--row {  
      &:not(:first-child) {
        .grid--cell { padding-top: 60px }
      }

      .grid--cell {
        transition: filter 250ms ease-in-out;
      }

      &:nth-child(odd) {
        .grid--cell {
          width: 378px;
          flex: none;
          ${ImageContainer} { height: 216px; }
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
        }
      }
    }
  }
`;