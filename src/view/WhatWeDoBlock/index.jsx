import React from 'react';
import Container from '../../components/base/Container';
import Text from '../../components/base/Text';
import { TitleContainer, GridContainer } from './elements';
import WorkCard from '../../components/combined/WorkCard';
import cards from './cards';
import Grid from '../../components/helpers/Grid';

class WhatWeDoBlock extends React.Component {
  render() {
    
    return (
      <Container justify = 'center' fullHeight fullWidth style = {{ backgroundColor: '#fff' }}>
        <Container>
          <TitleContainer>
            <Text type = 'h2'>Что мы делаем?</Text>
          </TitleContainer>
          <GridContainer>
            <Grid
              elements = {cards.map(card => <WorkCard title = {card.title} text = {card.text} price = {card.price} img = {card.img} />)}
              columns = {2}
            />
          </GridContainer>
        </Container>
      </Container>
    )
  }
};

export default WhatWeDoBlock;