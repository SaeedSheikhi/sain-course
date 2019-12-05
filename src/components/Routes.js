import React, { Component } from "react";
import Clock from "./Clock";
import Information from "./Information";
import FourOFour from "./FourOFour";
import Converter from "./Converter";
import Applications from "./Applications";

class Routes extends Component {
  decideToRenderPage = () => {
    const { currentPage, name, famil } = this.props;

    if (currentPage === "clock") return <Clock></Clock>;
    if (currentPage === "information")
      return <Information name={name} famil={famil}></Information>;
    if (currentPage === "applications") return <Applications></Applications>;

    if (currentPage === "converter") return <Converter></Converter>;
    else return <FourOFour></FourOFour>;
  };

  render() {
    return <div>{this.decideToRenderPage()}</div>;
  }
}

export default Routes;
