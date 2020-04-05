import React from 'react';
import { HeaderWrapper, Menu, ModalMenu, InnerModalMenu, MenuIcon, ModalMenuItems, CloseMenuIcon, IEMiddleBanner } from './elements';
import List from '../../components/base/List';
import withID from '../../components/helpers/withID';
import { InnerContainer } from '../../components/base/shared';
import Logo from '../../components/base/Logo';

const Header = () => {
  const [onTop, changeOnTop] = React.useState(true);
  const [scrolling, changeScrolling] = React.useState(false);
  const [menuAsIcon, changeMenuAsIcon] = React.useState(window.innerWidth > 567 ? false : true);
  const [showModalMenu, changeShowModalMenu] = React.useState(false);
  const [active, changeActive] = React.useState(false);

  const changeHeaderPosition = () => {
    const { scrollY } = window;
    
    if (scrollY >= 48 && onTop) changeOnTop(false);
    else if (scrollY < 48 && !onTop) changeOnTop(true);

    if (scrollY >= window.innerHeight && !scrolling) changeScrolling(true);
    else if (scrollY < window.innerHeight && scrolling) changeScrolling(false);

    const blocks = ['#what-we-do', '#our-projects', '#form-block'];
    const blockPositions = blocks.map(block => document.querySelectorAll(block)[0].getBoundingClientRect().top - 72);
    const scrolledBlocks = blockPositions.filter(position => position < 0);
    if (scrolledBlocks && scrolledBlocks.length > 0) {
      changeActive(scrolledBlocks.length - 1);
    } else changeActive(false);
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
                    <a href = "#what-we-do">Услуги</a>,
                    <a href = "#our-projects">Портфолио</a>,
                    <a href = "#form-block">Обратная связь</a>,
                  ]}/>
                </ModalMenuItems>
              </InnerModalMenu>
            </ModalMenu>
          : null
      }
      <InnerContainer>
        <Logo variation = {onTop ? 'light' : 'dark'} />
        <IEMiddleBanner />
        {
          menuAsIcon
            ? <MenuIcon
                variation = {onTop ? 'light' : 'dark' }
                onClick = {() => changeShowModalMenu(true)}
              />
            : <Menu onTop = {onTop}>
                <List elements = {[
                    <a href = "#what-we-do">Услуги</a>,
                    <a href = "#our-projects">Портфолио</a>,
                    <a href = "#form-block">Обратная связь</a>,
                ]} active = {active}/>
              </Menu>
        }
      </InnerContainer>
    </HeaderWrapper>
  );
}

export default withID('header', Header);