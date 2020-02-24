import React from 'react';
import WelcomeBlock from './view/WelcomeBlock';
import WhatWeDoBlock from './view/WhatWeDoBlock';
import OurProjectsBlock from './view/OurProjectsBlock';
import Header from './view/Header';
import FormBlock from './view/FormBlock';
import Footer from './view/Footer';
import ModalFrom from './view/ModalForm';

class App extends React.Component {
  state = { isModalVisible: false };

  showModal = () => this.setState({ isModalVisible: true });
  hideModal = () => this.setState({ isModalVisible: false });

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { isModalVisible } = this.state;
    return (
      <>
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
