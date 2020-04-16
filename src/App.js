import React from 'react';
import WelcomeBlock from './view/WelcomeBlock';
import WhatWeDoBlock from './view/WhatWeDoBlock';
import OurProjectsBlock from './view/OurProjectsBlock';
import Header from './view/Header';
import FormBlock from './view/FormBlock';
import Footer from './view/Footer';
import ModalFrom from './view/ModalForm';
import PromoPopup from './view/PromoPopup';

class App extends React.Component {
  state = { isModalVisible: false };

  showModal = () => this.setState({ isModalVisible: true });
  hideModal = () => this.setState({ isModalVisible: false });

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { isModalVisible } = this.state;
    
    const referrer = document.referrer;
    const URL_WITH_PROMO = window.location.href.includes('from=VK_PROMO');

    return (
      <>
        {
          referrer && URL_WITH_PROMO
            ? <PromoPopup />
            : null
        }
        {
          isModalVisible ? <ModalFrom hideModal = {this.hideModal}/> : null
        }
        <Header />
        <WelcomeBlock showModal = {this.showModal} />
        <WhatWeDoBlock showModal = {this.showModal} />
        <OurProjectsBlock />
        <FormBlock />
        <Footer />
      </>
    );
  }
}

export default App;
