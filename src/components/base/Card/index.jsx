import React from 'react';
import { CardContainer, CardInnerContainer } from './elements';

const Card = ({ withShadow, withPadding, fullHeight, children, href = null }) =>
  <CardContainer fullHeight = {fullHeight} withShadow = {withShadow} href = {href}>
    { withPadding ? <CardInnerContainer>{children}</CardInnerContainer> : children }
  </CardContainer>

export default Card;