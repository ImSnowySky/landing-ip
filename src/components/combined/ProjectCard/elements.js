import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 100%;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  color: #242424;
`;

export const Title = styled.div`
  font-size: 24px;
  line-height: 24px;
`;

export const Description = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-top: 16px;
  width: 100%;

  @media (max-width: 1279px) {
    font-size: 14px;
    line-height: 20px;
  }
`;