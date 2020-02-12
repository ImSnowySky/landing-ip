import React from 'react';
import Text from '../Text';
import { ButtonContainer } from './elements';
import withHoverChecker from '../../helpers/withHoverChecker';

const Button = ({ primary, disabled, hover, children }) =>
  <ButtonContainer disabled = {disabled} hover = {hover} primary = {primary}>
    <Text className = 'btn-text'>{ children }</Text>
  </ButtonContainer>

export default withHoverChecker(Button);