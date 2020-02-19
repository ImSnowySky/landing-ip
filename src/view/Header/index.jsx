import React from 'react';
import { HeaderWrapper, Menu, ModalMenu, InnerModalMenu, MenuIcon, ModalMenuItems, CloseMenuIcon } from './elements';
import List from '../../components/base/List';
import withID from '../../components/helpers/withID';
import { InnerContainer } from '../../components/base/shared';
import Logo from '../../components/base/Logo';

const Header = () => {
  const [onTop, changeOnTop] = React.useState(true);
  const [scrolling, changeScrolling] = React.useState(false);
  const [menuAsIcon, changeMenuAsIcon] = React.useState(window.innerWidth > 567 ? false : true);
  const [showModalMenu, changeShowModalMenu] = React.useState(false);

  const changeHeaderPosition = () => {
    const { scrollY } = window;
    
    if (scrollY >= 48 && onTop) changeOnTop(false);
    else if (scrollY < 48 && !onTop) changeOnTop(true);

    if (scrollY >= window.innerHeight && !scrolling) changeScrolling(true);
    else if (scrollY < window.innerHeight && scrolling) changeScrolling(false);
  }

  const changeMenuVisibility = () => {
    if (window.innerWidth > 567) changeMenuAsIcon(false);
    else changeMenuAsIcon(true);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeHeaderPosition);
    return () => window.removeEventListener('scroll', changeHeaderPosition);
  });

  React.useEffect(() => {
    window.addEventListener('resize', changeMenuVisibility);
    return () => window.removeEventListener('resize', changeMenuVisibility);
  })

  return (
    <HeaderWrapper onTop = {onTop} scrolling = {scrolling}>
      {
        showModalMenu
          ? <ModalMenu>
              <InnerModalMenu>
                <CloseMenuIcon onClick = {() => changeShowModalMenu(false)}/>
                <ModalMenuItems>
                  <List direction = 'column' elements = {[
                    <a href = "#">Услуги</a>,
                    <a href = "#">Портфолио</a>,
                    <a href = "#">Обратная связь</a>,
                    <a href = "#">8-800-555-35-35</a>,
                  ]}/>
                </ModalMenuItems>
              </InnerModalMenu>
            </ModalMenu>
          : null
      }
      <InnerContainer>
        <Logo variation = {onTop ? 'light' : 'dark'} />
        {
          menuAsIcon
            ? <MenuIcon
                variation = {onTop ? 'light' : 'dark' }
                onClick = {() => changeShowModalMenu(true)}
              />
            : <Menu onTop = {onTop}>
                <List elements = {[
                  <a href = "#">Услуги</a>,
                  <a href = "#">Портфолио</a>,
                  <a href = "#">Обратная связь</a>,
                  <a href = "#">8-800-555-35-35</a>,
                ]}/>
              </Menu>
        }
      </InnerContainer>
    </HeaderWrapper>
  );
}

export default withID('header', Header);