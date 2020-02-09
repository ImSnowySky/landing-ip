import React from 'react';
import { ListContainer, ListElement } from './elements';

class List extends React.Component {
  render() {
    const { elements, direction, active } = this.props;
    return (
      <ListContainer direction = {direction}>
        { elements.map((el, i) => <ListElement active = {active === i} direction = {direction}>{el}</ListElement>) }
      </ListContainer>
    )
  }
};

export default List;