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

  @media (max-width: 1023px) {
    width: 400px;

    h3.title { font-size: 22px; line-height: 44px };
    p.content { font-size: 16px; line-height: 22px; margin-top: 12px };
  }

  @media (max-width: 767px) {
    width: 320px;

    h3.title { font-size: 16px; line-height: 20px }
    p.content { font-size: 14px; line-height: 18px }
  }

  @media (max-width: 567px) {
    width: 100%;
    top: 86px;

    h3.title { font-size: 20px; line-height: 29px; }
    p.content { font-size: 16px; line-height: 24px; }
  }
`;

export const ImageContainer = styled(BaseContainer)`
  right: 0;
  top: 0;
  width: 128px;
  height: 128px;

  img { width: 100%; height: 100% }

  @media (max-width: 1279px) {
    width: 112px;
    height: 112px;
  }

  @media (max-width: 767px) {
    width: 96px;
    height: 96px;
  }

  @media (max-width: 567px) {
    width: 100%;
    height: 76px;
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

  @media (max-width: 1023px) {
    width: 200px;
  }

  @media (max-width: 767px) {
    width: 106px;
    height: 40px;
  }
`