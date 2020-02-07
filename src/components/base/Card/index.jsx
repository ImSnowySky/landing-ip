import React from 'react';
import { CardContainer, CardInnerContainer } from './elements';
import withHoverChecker from '../../helpers/withHoverChecker';

const Card = ({ hover, withShadow, withPadding, fullHeight, children }) =>
  <CardContainer
    hover = {hover}
    fullHeight = {fullHeight}
    withShadow = {withShadow}
  >
    {
      withPadding
        ? <CardInnerContainer>{children}</CardInnerContainer>
        : children
    }
  </CardContainer>

export default withHoverChecker(Card);