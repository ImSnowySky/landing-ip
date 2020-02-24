import React from 'react';
import { ListContainer, ListElement } from './elements';

const wrappedElements = (elements, direction,  active) => elements.map((el, i) =>
  <ListElement key = {i} active = {active === i} direction = {direction}>{el}</ListElement>
)

const List = ({ elements, direction, active }) =>
  <ListContainer direction = {direction}>
    {wrappedElements(elements, direction, active)}
  </ListContainer>

export default List;