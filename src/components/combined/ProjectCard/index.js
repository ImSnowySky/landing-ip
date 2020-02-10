import React from 'react';
import Card from '../../base/Card';
import Text from '../../base/Text';
import mamont from './assets/mamont.png';
import rnes from './assets/rnes.png';
import urber from './assets/urber.png';
import noble from './assets/noble.png';
import { ImageContainer, ContentContainer, Title, Description } from './elements';

const images = { mamont, rnes, urber, noble };
const getImageByName = name => images[name] || null;

const ProjectCard = ({ title, text, img }) => <Card fullHeight>
  <ImageContainer src = {getImageByName(img)}></ImageContainer>
  <ContentContainer>
    <Title><Text type = 'h3'>{title}</Text></Title>
    <Description><Text type ='p'>{text}</Text></Description>
  </ContentContainer>
</Card>

export default ProjectCard;