import React from 'react';
import { ContainerBlock } from './elements';

const Container = ({ children, fullHeight = false, bgColor }) => {
  const [screenHeight, changeScreenHeight] = React.useState(window.innerHeight);
  const changeHeight = () => changeScreenHeight(window.innerHeight);

  React.useEffect(() => {
    window.addEventListener('resize', changeHeight);
    return () => window.removeEventListener('resize', changeHeight);
  });

  return (
    <ContainerBlock fullHeight = {fullHeight} screenHeight = {screenHeight} bgColor = {bgColor}>
      {children}
    </ContainerBlock>
  )
}

export default Container;