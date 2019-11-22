import React, { Component } from "react";

class Clock extends Component {
  state = { number: 0 };

  initializeInterval = () => {
    this.timerId = setInterval(() => {
      this.setState({ number: this.state.number + 1 });
      console.log(this.state.number);
    }, 1000);
  };
  componentDidMount() {
    this.initializeInterval();
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <div>The Counter : {this.state.number}</div>;
  }
}

export default Clock;
