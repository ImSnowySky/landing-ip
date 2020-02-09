import React from 'react';
import { ContainerWrapper } from './elements';

class Container extends React.Component {
  state = {
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  };

  changeSize = () => this.setState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  });

  componentDidMount() {
    window.addEventListener('resize', this.changeSize);
  }

  render() {
    const { screenWidth, screenHeight } = this.state;
    const { children, fullWidth = false, fullHeight = false, style = null, justify } = this.props;

    return (
      <ContainerWrapper
        fullWidth = {fullWidth}
        fullHeight = {fullHeight}
        width = {screenWidth}
        height = {screenHeight}
        justify = {justify}
        style = {style}
      >
        {children}
      </ContainerWrapper>
    )
  }
}

export default Container;