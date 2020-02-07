import React from 'react';
import { RenderByCondition } from '../../helpers/renderByCondition';
import { TextWrapper } from './elements';

const TEXT_TYPES = props => [{
  condition: () => props.type === 'span',
  view: <span />,
}, {
  condition: () => props.type === 'p',
  view: <p />,
}, {
  condition: () => props.type === 'h1',
  view: <h1 />,
}, {
  condition: () => props.type === 'h2',
  view: <h2 />,
}, {
  condition: () => props.type === 'h3',
  view: <h3 />,
}, {
  condition: () => props.type === 'h4',
  view: <h4 />,
}, {
  condition: () => props.type === 'h5',
  view: <h5 />,
}];


const Text = props => {
  const preparedProps = {
    ...props,
    type: props.type || 'span',
  };

  return (
    <TextWrapper accent = {props.accent}>
      <RenderByCondition renders = {TEXT_TYPES} {...preparedProps} />
    </TextWrapper>
  );
}

export default Text;