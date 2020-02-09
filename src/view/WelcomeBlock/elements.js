import styled from 'styled-components';
import swipeDown from './assets/swipe-down.svg';

const Default = styled.div`
  font-weight: 800;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
`;

export const TitleContainer = styled(Default)`
  width: 100%;

  h1 {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const BackgroundVideo = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0%;
  overflow: hidden;
  width: 100%;
  height: 100%;

  
  @media (min-aspect-ratio: 16/9) {
    width: 100%;
    height: auto;
  }

  @media (max-aspect-ratio: 16/9) {
    width: 100%;
    height: auto;
  }
`

export const DescriptionContainer = styled(Default)`
  width: 730px;
  margin-top: 72px;
  text-shadow: 0px 0px 12px rgba(0, 0, 0, 1);

  p {
    font-size: 32px;
    line-height: 40px;
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