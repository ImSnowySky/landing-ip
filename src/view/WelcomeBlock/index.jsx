import React from 'react';
import Container from '../../components/base/Container';
import Text from '../../components/base/Text';
import Button from '../../components/base/Button';
import withID from '../../components/helpers/withID';
import { PaddingInnerContainer, VideoWrapper, BackgroundVideo, TitleContainer, DescriptionContainer, ButtonContainer, SwipeDown } from './elements';
import bgVideo from './assets/bg-video.mp4';

class WelcomeBlock extends React.Component {
  render() {
    return (
      <Container justify = 'center' fullHeight style = {{ marginBottom: 64 }}>
        <VideoWrapper>
          <BackgroundVideo preload = 'auto' loop = 'true' autoPlay muted>
            <source src = {bgVideo} type = 'video/mp4' />
          </BackgroundVideo>
        </VideoWrapper>
        <PaddingInnerContainer>
          <TitleContainer>
            <Text type = 'h1'>Веб-студия Радиан</Text>
          </TitleContainer>
          <DescriptionContainer>
            <Text type = 'p'>Мы занимаемся проектированием сайтов и интерфейсов, их разработкой и аналитикой</Text>
          </DescriptionContainer>
          <ButtonContainer>
            <Button primary>Обсудить проект</Button>
          </ButtonContainer>
        </PaddingInnerContainer>
        <SwipeDown />
      </Container>
    )
  }
};

export default withID('welcome', WelcomeBlock);