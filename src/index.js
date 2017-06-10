import React, { Component } from 'react';
import isPromise from 'ispromise';

class Bundle extends Component {
  state = {
    mod: null
  };

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load({ load }) {
    this.setState({
      mod: null
    });

    const loaded = mod =>
      this.setState({ mod: mod.default ? mod.default : mod });

    load(mod => {
      if (!isPromise(mod)) {
        return loaded(mod);
      }

      mod.then(loaded);
    });
  }

  render() {
    return this.props.children(this.state.mod);
  }
}

export default Bundle;