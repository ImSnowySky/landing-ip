import React from 'react';
import Container from '../../components/base/Container';
import { GridContainer } from './elements';
import Text from '../../components/base/Text';
import ProjectCard from '../../components/combined/ProjectCard';
import Grid from '../../components/helpers/Grid';
import cards from './cards';
import { InnerContainer,TitleContainer } from '../../components/base/shared';
import withID from '../../components/helpers/withID';

const getElementsForGrid = cards => cards.map(card => card ? <ProjectCard title = {card.title} text = {card.text} img = {card.img} href = {card.href} /> : null)

const OurProjectsBlock = () => <Container bgColor = '#fff'>
  <InnerContainer withMargin>
    <TitleContainer>
      <Text type = 'h2'>Наши проекты</Text>
    </TitleContainer>
    <GridContainer>
      <Grid elements = {getElementsForGrid(cards)} columns = {3} />
    </GridContainer>
  </InnerContainer>
</Container>

export default withID('our-projects', OurProjectsBlock);