import React from 'react';
import { ContentContainer, ButtonContainer, ImageContainer, PriceContainer } from './elements';
import Card from '../../base/Card';
import Text from '../../base/Text';
import Button from '../../base/Button';
import withHoverChecker from '../../helpers/withHoverChecker';

import monitor from './assets/monitor.svg';
import notebook from './assets/notebook.svg';
import statistic from './assets/statistic.svg';
import mobile from './assets/mobile.svg';

const images = { monitor, notebook, statistic, mobile };
const getImgByName = name => images[name] || null;

const WorkCard = props => 
  <Card fullHeight withShadow withPadding>
    <ContentContainer>
      <Text type = 'h3' className = 'title'>
        {props.title}
      </Text>
      <Text type = 'p' className = 'content'>
        {props.text}
      </Text>
    </ContentContainer>
    <ImageContainer>
      <img src = {getImgByName(props.img)} />
    </ImageContainer>
    {
      props.price && <PriceContainer>
        <Text type = 'span' accent>от {props.price} ₽</Text>
      </PriceContainer>
    }
    <ButtonContainer>
      <Button>Заказать</Button>
    </ButtonContainer>
  </Card>

export default withHoverChecker(WorkCard);