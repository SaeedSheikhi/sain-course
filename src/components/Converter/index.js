import React, { Component } from "react";

class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toman: "",
      dollar: ""
    };
  }

  syncFields = e => {
    // 1 Dollar = 11000 Toman
    const name = e.target.name;
    const value = e.target.value;
    if (name === "toman") {
      this.setState({ dollar: value / 11000 });
    } else if (name === "dollar") {
      this.setState({ toman: value * 11000 });
    }
  };

  render() {
    return (
      <form className="form-row">
        <div className="col-6">
          <label>Toman</label>
          <input
            name="toman"
            className="form-control"
            type="text"
            value={this.state.toman}
            onChange={e => {
              this.setState({ toman: e.target.value });
              this.syncFields(e);
            }}
          ></input>
        </div>
        <div className="col-6">
          <label>Dollar</label>
          <input
            name="dollar"
            className="form-control"
            type="text"
            value={this.state.dollar}
            onChange={e => {
              this.setState({ dollar: e.target.value });
              this.syncFields(e);
            }}
          ></input>
        </div>
      </form>
    );
  }
}

export default Converter;
