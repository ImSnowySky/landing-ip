import React from 'react';
import Container from '../../components/base/Container';
import { TitleContainer, GridContainer } from './elements';
import Text from '../../components/base/Text';
import ProjectCard from '../../components/combined/ProjectCard';
import Grid from '../../components/helpers/Grid';
import cards from './cards';

class OurProjectsBlock extends React.Component {
  render() {
    return (
      <Container justify = 'center' fullHeight fullWidth style = {{ backgroundColor: '#fff' }}>
        <Container>
          <TitleContainer>
            <Text type = 'h2'>Наши проекты</Text>
          </TitleContainer>
          <GridContainer>
            <Grid
              elements = {cards.map(card => card ? <ProjectCard title = {card.title} text = {card.text} img = {card.img} /> : null)}
              columns = {3}
            />
          </GridContainer>
        </Container>
      </Container>
    )
  }
};

export default OurProjectsBlock;