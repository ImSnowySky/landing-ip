import React from 'react';
import Text from '../Text';
import { ButtonContainer } from './elements';
import withHoverChecker from '../../helpers/withHoverChecker';

const Button = ({ hover, children }) =>
  <ButtonContainer hover = {hover}>
    <Text className = 'btn-text'>
      { children }
    </Text>
  </ButtonContainer>

export default withHoverChecker(Button);