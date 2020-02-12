import React from 'react';
import { HeaderWrapper, Logo, Menu } from './elements';
import logo from './assets/logo.svg';
import darkLogo from './assets/logo-dark.svg';
import List from '../../components/base/List';
import withID from '../../components/helpers/withID';
import { InnerContainer } from '../../components/base/shared';

const Header = () => {
  const [onTop, changeOnTop] = React.useState(true);
  const [scrolling, changeScrolling] = React.useState(false);

  const changeHeaderPosition = () => {
    const { scrollY } = window;
    
    if (scrollY >= 48 && onTop) changeOnTop(false);
    else if (scrollY < 48 && !onTop) changeOnTop(true);

    if (scrollY >= window.innerHeight && !scrolling) changeScrolling(true);
    else if (scrollY < window.innerHeight && scrolling) changeScrolling(false);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeHeaderPosition);
    return () => window.removeEventListener('scroll', changeHeaderPosition);
  });

  return (
    <HeaderWrapper onTop = {onTop} scrolling = {scrolling}>
      <InnerContainer>
        <Logo><img src = {onTop ? logo : darkLogo} alt = 'Радиан' /></Logo>
        <Menu onTop = {onTop}>
          <List elements = {[
            <a href = "#">Услуги</a>,
            <a href = "#">Портфолио</a>,
            <a href = "#">Обратная связь</a>,
            <a href = "#">8-800-555-35-35</a>,
          ]}/>
        </Menu>
      </InnerContainer>
    </HeaderWrapper>
  );
}

export default withID('header', Header);