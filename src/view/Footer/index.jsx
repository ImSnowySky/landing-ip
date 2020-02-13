import React from 'react';
import { FooterWrapper, FooterContent } from './elements';
import { InnerContainer } from '../../components/base/shared';
import Logo from '../../components/base/Logo';
import Text from '../../components/base/Text';

const Footer = () => <FooterWrapper>
  <InnerContainer direction = 'row'>
    <Logo variation = 'light' />
    <FooterContent>
      <div><Text type = 'span'>г. Екатеринбург</Text></div>
      <div><Text type = 'span'>© Студия «Радиан», 2020</Text></div>
    </FooterContent>
    <FooterContent>
      <div><Text type = 'span'>info@3kitayca.ru</Text></div>
      <div><Text type = 'span'>8-800-555-35-35</Text></div>
    </FooterContent>
    <FooterContent>
      <div><a href = '#'>Политика конфиденциальности</a></div>
    </FooterContent>
  </InnerContainer>
</FooterWrapper>

export default Footer;