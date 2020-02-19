import styled from 'styled-components';
import swipeDown from './assets/swipe-down.svg';
import { InnerContainer } from '../../components/base/shared';
import bg from './assets/bg.svg';

const Default = styled.div`
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
`;

export const PaddingInnerContainer = styled(InnerContainer)`
  padding: 0 88px;

  @media (max-width: 1279px) {
    padding: 0 53px;
  }

  @media (max-width: 1023px) {
    padding: 0 49px;
  }

  @media (max-width: 767px) {
    padding: 0 35px;
  }
`;

export const TitleContainer = styled(Default)`
  width: 100%;

  h1 {
    font-size: 48px;
    line-height: 48px;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 24px;
      line-height: 32px;
    }
  }

  @media (max-width: 567px) {
    h1 {
      font-size: 32px;
      line-height: 49px;
    }
  }

  @media (max-width: 374) {
    h1 {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

export const VideoWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  top: 0;
  left: 0;
`;

export const BackgroundVideo = styled.video`
  position: fixed;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
`

export const DescriptionContainer = styled(Default)`
  width: 100%;
  margin-top: 72px;
  text-shadow: 0px 0px 12px rgba(0, 0, 0, 1);

  p {
    font-size: 32px;
    line-height: 48px;
    font-family: 'Gilroy-ExtraBold', 'Open Sans', 'Roboto', sans-serif;
  }

  @media (max-width: 767px) {
    margin-top: 32px;
    p {
      font-size: 14px;
      line-height: 18px;
    }
  }

  @media (max-width: 567px) {
    p {
      font-size: 18px;
      line-height: 29px;
    }
  }

  @media (max-width: 374px) {
    p {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const ButtonContainer = styled(Default)`
  font-size: 18px;
  line-height: 22px;
  color: #242424;
  width: 264px;
  height: 56px;
  margin-top: 72px;

  @media (max-width: 767px) {
    width: 160px;
    height: 40px;
    margin-top: 24px;
  }
`;

export const SwipeDown = styled.div`
  position: absolute;
  width: 28px;
  height: 56px;
  bottom: 40px;
  left: 50%;
  border-radius: 28px;
  transform: translateX(-50%);
  background-image: url(${swipeDown});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    width: 16px;
    height: 36px;
    bottom: 16px;
  }
`;