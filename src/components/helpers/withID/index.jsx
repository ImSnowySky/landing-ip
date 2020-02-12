import React from 'react';

const withID = (id, Component) => class extends React.Component {
  render() {
    return (
      <div id = {id}>
        <Component {...this.props} />
      </div>
    );
  }
};

export default withID;