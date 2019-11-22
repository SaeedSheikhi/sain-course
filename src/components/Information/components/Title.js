import React, { Component } from "react";

class Title extends Component {
  render() {
    console.log({
      name: this.props.name,
      famil: this.props.famil
    });
    return <h1>{`slm ${this.props.name} ${this.props.famil}`}</h1>;
  }
}

export default Title;
