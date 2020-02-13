import React from 'react';
import { LogoContainer } from './elements';
import logo from './assets/logo.svg';
import darkLogo from './assets/logo-dark.svg';

const Logo = ({ variation = 'light' }) => <LogoContainer>
  <img src = {variation === 'light' ? logo : darkLogo} alt = 'Радиан' />
</LogoContainer>

export default Logo;