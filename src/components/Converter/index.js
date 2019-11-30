import React, { Component } from "react";
import axios from "axios";
class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toman: "",
      dollar: "",
      currency: 5000,
      loading: false
    };
  }

  loadAsyncData = () => {
    this.setState({ loading: true });
    axios
      .get("https://a.anardoni.com/pay/currency")
      .then(res => {
        console.log(res.data);
        this.setState({ currency: Number(res.data.currency) });
        this.setState({ loading: false });
      })
      .catch(err => {
        console.log(err.response);
        this.setState({ loading: false });
      });
  };

  componentDidMount() {
    setTimeout(this.loadAsyncData, 1000);
  }

  syncFields = name => {
    // 1 Dollar = 1000 Toman
    let value;
    const { currency, toman, dollar } = this.state;

    if (name === "dollar") value = dollar;
    if (name === "toman") value = toman;

    if (name === "toman") {
      this.setState({ dollar: value / currency });
    } else if (name === "dollar") {
      this.setState({ toman: value * currency });
    } else {
      this.setState({
        dollar: toman / currency
      });
    }
  };

  renderCurrencyValue = () => {
    const { loading, currency, toman, dollar } = this.state;

    if (loading) return "loading...";
    if (!toman || !dollar) return "please enter something first";
    return currency;
  };

  render() {
    const { loading, currency, toman, dollar } = this.state;
    return (
      <form className="form-row">
        <div className="col-6">
          <label>Currency - Toman</label>
          <input
            name="currency"
            className="form-control"
            type="text"
            disabled={loading || !toman || !dollar}
            value={this.renderCurrencyValue()}
            onChange={e => {
              this.setState(
                {
                  currency: e.target.value
                },
                () => {
                  this.syncFields();
                }
              );
            }}
          ></input>
        </div>
        <div className="col-6">
          <label>Toman</label>
          <input
            name="toman"
            className="form-control"
            type="text"
            value={toman}
            onChange={e => {
              const name = e.target.name;
              this.setState({ toman: e.target.value }, () => {
                this.syncFields(name);
              });
            }}
          ></input>
        </div>
        <div className="col-6">
          <label>Dollar</label>
          <input
            name="dollar"
            className="form-control"
            type="text"
            value={dollar}
            onChange={e => {
              const name = e.target.name;
              this.setState({ dollar: e.target.value }, () => {
                this.syncFields(name);
              });
            }}
          ></input>
        </div>
      </form>
    );
  }
}

export default Converter;
