import React from 'react';
import WorkCard from './components/combined/WorkCard';

function App() {
  return (
    <>
      <div style = {{ width: '552px', height: '250px' }}>
        <WorkCard
          title = 'Корпоративные сайты'
          text = 'Создаём полноценное представительство вашей компании в интернете'
          price = '5 000'
          img = {'mobile'}
        />
      </div>
    </>
  );
}

export default App;
