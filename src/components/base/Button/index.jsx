import React from 'react';
import Text from '../Text';
import { ButtonContainer } from './elements';
import withHoverChecker from '../../helpers/withHoverChecker';

const Button = ({ primary, hover, children }) =>
  <ButtonContainer hover = {hover} primary = {primary}>
    <Text className = 'btn-text'>
      { children }
    </Text>
  </ButtonContainer>

export default withHoverChecker(Button);