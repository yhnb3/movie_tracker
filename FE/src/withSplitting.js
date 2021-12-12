/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

const withSplitting = (getComponent) => {
  class WithSplitting extends Component {
    constructor(props) {
      super(props);
      console.log(props);
      this.state = {
        Splitted: null,
      };
      getComponent().then(({ default: Splitted }) => {
        console.log(Splitted);
        this.setState({
          Splitted,
        });
      });
    }

    render() {
      const { Splitted } = this.state;
      if (!Splitted) {
        return null;
      }
      return <Splitted {...this.props} />;
    }
  }

  return WithSplitting;
};

export default withSplitting;
