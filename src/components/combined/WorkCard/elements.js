import styled from 'styled-components';

const BaseContainer = styled.div`
  position: absolute;
`;

export const ContentContainer = styled(BaseContainer)`
  left: 0;
  top: 0;
  width: calc(100% - 144px);

  h3.title { 
    font-size: 24px;
    line-height: 32px;
    font-weight: 800;
  }

  p.content {
    font-size: 16px;
    line-height: 24px;
    margin-top: 24px;
  }

  @media (max-width: 1279px) {
    width: calc(100% - 108px);
    h3.title {
      font-size: 22px;
    }
  }
`;

export const ImageContainer = styled(BaseContainer)`
  right: 0;
  top: 0;
  width: 128px;
  height: 128px;

  @media (max-width: 1279px) {
    width: 112px;
    height: 112px;
  }
`;

export const PriceContainer = styled(BaseContainer)`
  left: 0;
  bottom: 0;
`;

export const ButtonContainer = styled(BaseContainer)`
  bottom: 0;
  right: 0;
  width: 200px;
  height: 48px;

  @media (max-width: 1279px) {
    width: 168px;
  }
`