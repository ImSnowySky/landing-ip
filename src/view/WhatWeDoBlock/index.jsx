import React from 'react';
import { TitleContainer, InnerContainer } from '../../components/base/shared';
import Container from '../../components/base/Container';
import Text from '../../components/base/Text';
import WorkCard from '../../components/combined/WorkCard';
import Grid from '../../components/helpers/Grid';
import withID from '../../components/helpers/withID';
import { GridContainer } from './elements';
import cards from './cards';

const getElementsForGrid = cards =>
  cards.map(card => card
    ? <WorkCard title = {card.title} text = {card.text} price = {card.price} img = {card.img} />
    : null
  );

const WhatWeDoBlock = () => <Container bgColor = '#fff'>
  <InnerContainer withMargin>
    <TitleContainer>
      <Text type = 'h2'>Что мы делаем?</Text>
    </TitleContainer>
    <GridContainer>
      <Grid elements = {getElementsForGrid(cards)} columns = {2} />
    </GridContainer>
  </InnerContainer>
</Container>

export default withID('what-we-do', WhatWeDoBlock);