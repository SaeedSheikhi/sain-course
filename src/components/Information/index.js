import React, { Component } from "react";
// import Title from "./components/Title";
// import Subtitle from "./components/Subtitle";
// import Description from "./components/Description";

import { Title, Subtitle, Description } from "./components";

class Information extends Component {
  render() {
    return (
      <div>
        <Title {...this.props} />
        <Subtitle {...this.props} />
        <Description {...this.props} />
      </div>
    );
  }
}

export default Information;
