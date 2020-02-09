import React from 'react';
import bg from './assets/bg.svg';
import bgVideo from './assets/bg-video.mp4';
import Container from '../../components/base/Container';
import Text from '../../components/base/Text';
import { BackgroundVideo, TitleContainer, DescriptionContainer, ButtonContainer, SwipeDown } from './elements';
import Button from '../../components/base/Button';

class WelcomeBlock extends React.Component {
  render() {
    return (
      <Container justify = 'center' fullHeight fullWidth>
        <BackgroundVideo preload = 'auto' loop = 'true' autoPlay muted poster = {bg}>
          <source src = {bgVideo} type = 'video/mp4' />
        </BackgroundVideo>
        <Container>
          <TitleContainer>
            <Text type = 'h1'>Веб-студия Радиан</Text>
          </TitleContainer>
          <DescriptionContainer>
            <Text type = 'p'>Мы занимаемся проектированием сайтов и интерфейсов, их разработкой и аналитикой</Text>
          </DescriptionContainer>
          <ButtonContainer>
            <Button primary>Обсудить проект</Button>
          </ButtonContainer>
        </Container>
        <SwipeDown />
      </Container>
    )
  }
};

export default WelcomeBlock;