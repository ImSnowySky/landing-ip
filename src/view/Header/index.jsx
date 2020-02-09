import React from 'react';
import Container from '../../components/base/Container';
import { HeaderWrapper, Logo, Menu } from './elements';
import logo from './assets/logo.svg';
import darkLogo from './assets/logo-dark.svg';

class Header extends React.Component {
  state = { onTop: true };

  changeHeaderPosition = () => {
    const { scrollY } = window;
    const { onTop, scrolling } = this.state;

    scrollY >= 32 && onTop && this.setState({ onTop: false });
    scrollY < 32 && !onTop && this.setState({ onTop: true });

    scrollY >= window.innerHeight && !scrolling && this.setState({ scrolling: true });
    scrollY < window.innerHeight && scrolling && this.setState({ scrolling: false });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeHeaderPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeHeaderPosition);
  }

  render() {
    return (
      <Container
        justify = 'center'
        fullWidth
        style = {{
          position: this.state.scrolling ? 'fixed' : 'absolute',
          zIndex: 10,
          left: 0,
          width: '100%',
          top: this.state.scrolling ? 0 : this.state.onTop ? 0 : window.innerHeight, 
        }}
      >
        <HeaderWrapper onTop = {this.state.onTop}>
          <Container>
            <Logo><img src = {this.state.onTop ? logo : darkLogo} alt = 'Радиан' /></Logo>
            <Menu>123</Menu>
          </Container>
        </HeaderWrapper>
      </Container>
    )
  }
};

export default Header;