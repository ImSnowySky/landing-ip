import React from 'react';
import { InnerContainer } from '../../components/base/shared';
import Container from '../../components/base/Container';
import Text from '../../components/base/Text';
import WorkCard from '../../components/combined/WorkCard';
import Grid from '../../components/helpers/Grid';
import withID from '../../components/helpers/withID';
import { TitleContainerWithMargin, GridContainer } from './elements';
import cards from './cards';

const getElementsForGrid = (cards, showModal) =>
  cards.map(card => card
    ? <WorkCard title = {card.title} text = {card.text} price = {card.price} img = {card.img} onClick = {showModal}/>
    : null
  );

const WhatWeDoBlock = ({ showModal = () => {} }) => <Container bgColor = '#fff'>
  <InnerContainer withMargin>
    <TitleContainerWithMargin>
      <Text type = 'h2'>Что мы делаем?</Text>
    </TitleContainerWithMargin>
    <GridContainer>
      <Grid elements = {getElementsForGrid(cards, showModal)} columns = {2} />
    </GridContainer>
  </InnerContainer>
</Container>

export default withID('what-we-do', WhatWeDoBlock);