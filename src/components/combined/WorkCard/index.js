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

const WorkCard = ({ title, text, img, price, onClick = () => { }}) => 
  <Card fullHeight withShadow withPadding>
    <ContentContainer>
      <Text type = 'h3' className = 'title'>
        {title}
      </Text>
      <Text type = 'p' className = 'content'>
        {text}
      </Text>
    </ContentContainer>
    <ImageContainer>
      <img src = {getImgByName(img)} />
    </ImageContainer>
    {
      price && <PriceContainer>
        <Text type = 'span' accent>от {price} ₽</Text>
      </PriceContainer>
    }
    <ButtonContainer>
      <Button onClick = {onClick}>Заказать</Button>
    </ButtonContainer>
  </Card>

export default withHoverChecker(WorkCard);