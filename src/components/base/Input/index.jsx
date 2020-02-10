import React from 'react';
import { InputControll, PlaceHolder, RealInput, Star, Error } from './elements';

class Input extends React.Component {
  wrapperRef = React.createRef();
  inputRef = React.createRef();
  state = { focuesd: false, value: null, error: null };

  makeActive = () => this.setState({ focused: true}, () => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  });

  makeInactive = e => {
    const isEqualNode = e.target.isEqualNode(this.wrapperRef.current)
    const isParentEqual = e.target.parentNode.isEqualNode(this.wrapperRef.current);
    if (!isEqualNode && !isParentEqual) this.setState({ focused: false }, () => {
      const { isRequired } = this.props;
      const { value } = this.state;
      if (isRequired && value === null) this.setState({ error: 'Поле обязательно для заполнения' });
      else this.setState({ error: null });
    });
  };

  handleChange = e => {
    if (e.target.value == '')  {
      this.setState({ value: null });
    } else {
      this.setState({ value: e.target.value });
    }
  }

  componentDidMount() {
    if (this.wrapperRef && this.wrapperRef.current) {
      this.wrapperRef.current.addEventListener('click', this.makeActive)
      window.addEventListener('click', this.makeInactive);
    }
  }

  render() {
    const { placeholder, isRequired } = this.props;
    const { focused, value, error } = this.state;

    return (
      <InputControll ref = {this.wrapperRef} error = {error} focused = {focused}>
        { placeholder
            ? <PlaceHolder onTop = {focused || value !== null} error = {error}>
                {placeholder}
                { isRequired ? <Star>*</Star> : null}
              </PlaceHolder>
            : null
        }
        { (focused || value !== null) 
            ? <RealInput ref = {this.inputRef} value = {value ? value : ''} onChange = {this.handleChange}/> 
            : null 
        }
        { error && <Error>{error}</Error>}
      </InputControll>
    );
  }
}

export default Input;