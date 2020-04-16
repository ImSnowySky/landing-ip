import React from 'react';
import { WhiteContainer } from './elements';

class PromoPopup extends React.Component {
  state = { className: null }

  componentDidMount = () => {
    window.setTimeout(() => {
      this.setState({ className: 'on-position' }, () => {
        window.setTimeout(() => {
          this.setState({ className: null })
        }, 3000)
      })
    }, 250)
  }

  render() {
    const { className } = this.state;

    return (
      <WhiteContainer className = {className}>
        Промокод «Скидка 10%» успешно активирован!
      </WhiteContainer>
    )
  }
}

export default PromoPopup;
