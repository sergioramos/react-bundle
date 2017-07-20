import { Component } from 'react';
import isPromise from 'ispromise';

class Bundle extends Component {
  state = {
    mod: null
  };

  constructor() {
    super();

    this.__mounted = false;
  }

  componentWillMount() {
    this.__mounted = true;
    this.load(this.props);
  }

  componentWillUnmount() {
    this.__mounted = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load({ load }) {
    if (!this.__mounted) {
      return;
    }

    this.setState({
      mod: null
    });

    const loaded = mod => {
      if (!this.__mounted) {
        return;
      }

      this.setState({ mod: mod.default ? mod.default : mod });
    };

    const res = load(loaded);

    if (isPromise(res)) {
      res.then(loaded);
    }
  }

  render() {
    return this.props.children(this.state.mod);
  }
}

export default Bundle;
