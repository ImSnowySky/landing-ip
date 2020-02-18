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
`;

export const TitleContainer = styled(Default)`
  width: 100%;

  h1 {
    font-size: 48px;
    line-height: 48px;
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
`;

export const ButtonContainer = styled(Default)`
  font-size: 18px;
  line-height: 22px;
  color: #242424;
  width: 264px;
  height: 56px;
  margin-top: 72px;
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
`;