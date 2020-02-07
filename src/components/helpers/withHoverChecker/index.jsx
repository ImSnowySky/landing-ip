import React from 'react';
import { HoverCheckerWrapper } from './elements';

const withHoverChecker = Component => class extends React.Component {
  state = { hover: this.props.hover || false }

  onMouseEnter = () => this.setState({ hover: true });
  onMouseLeave = () => this.setState({ hover: false });

  render() {
    return (
      <HoverCheckerWrapper onMouseEnter = {this.onMouseEnter} onMouseLeave = {this.onMouseLeave}>
        <Component {...this.props} {...this.state} />
      </HoverCheckerWrapper>
    );
  }
};

export default withHoverChecker;