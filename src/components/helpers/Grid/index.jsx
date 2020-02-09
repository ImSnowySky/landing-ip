import React from 'react';
import { CardGrid, CardRow, CardCell } from './elements';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    const { elements = [], columns = 2 } = props;

    this.groupedElements = [];
    let counter = 0;
    let arrIndex = 0;
    elements.forEach(element => {
      if (counter === columns) {
        arrIndex += 1;
        counter = 0;
      }

      if (!this.groupedElements[arrIndex]) this.groupedElements[arrIndex] = [];
      this.groupedElements[arrIndex].push(element);
      counter++;
    })
  }

  render() {
    const { groupedElements } = this;
    return (
      <CardGrid className = 'grid'>
        {
          groupedElements.map((group, i) =>
            <CardRow key = {i} className = 'grid--row'>
              {
                group.map((element, j) =>
                  <CardCell key = {j} className = 'grid--cell'>
                    { element }
                  </CardCell>  
                )
              }
            </CardRow>  
          )
        }
      </CardGrid>
    )
  }
}

export default Grid;