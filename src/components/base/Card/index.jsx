import React from 'react';
import { CardContainer, CardInnerContainer } from './elements';

const Card = ({ withShadow, withPadding, fullHeight, children }) =>
  <CardContainer
    fullHeight = {fullHeight}
    withShadow = {withShadow}
  >
    {
      withPadding
        ? <CardInnerContainer>{children}</CardInnerContainer>
        : children
    }
  </CardContainer>

export default Card;