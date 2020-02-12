import React from 'react';
import WelcomeBlock from './view/WelcomeBlock';
import WhatWeDoBlock from './view/WhatWeDoBlock';
import OurProjectsBlock from './view/OurProjectsBlock';
import Header from './view/Header';
import FormBlock from './view/FormBlock';
import Footer from './view/Footer';

class App extends React.Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <WelcomeBlock />
        <WhatWeDoBlock />
        <OurProjectsBlock />
        <FormBlock />
        <Footer />
      </>
    );
  }
}

export default App;
