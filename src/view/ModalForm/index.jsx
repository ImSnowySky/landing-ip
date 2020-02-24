import React from 'react';
import { ModalView, CloseButton } from './elements';
import FormBlock from '../FormBlock';

export default class ModalForm extends React.Component {
  state = { width: window.innerWidth, height: window.innerHeight };

  changeSize = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentDidMount() {
    window.addEventListener('resize', this.changeSize);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.changeSize);
    document.body.style.overflow = 'auto';
  }

  render() {
    const { hideModal = () => { } } = this.props;
    const { width = window.innerWidth, height = window.innerHeight } = this.state;
    return (
      <ModalView width = {width} height = {height}>
        <CloseButton onClick = {hideModal}/>
        <FormBlock />
      </ModalView>
    );
  }
}