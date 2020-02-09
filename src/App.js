import React from 'react';
import WelcomeBlock from './view/WelcomeBlock';
import WhatWeDoBlock from './view/WhatWeDoBlock';
import OurProjectsBlock from './view/OurProjectsBlock';
import Header from './view/Header';

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
      </>
    );
  }
}

export default App;
