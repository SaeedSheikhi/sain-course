import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";

class App extends Component {
  state = {
    name: "saeed",
    famil: "awd",
    currentPage: "applications"
  };

  handlePageChange = pageName => {
    this.setState({ currentPage: pageName });
  };

  render() {
    // const { currentPage, name, famil } = this.state;
    // const currentPage = this.state.currentPage;
    // const name = this.state.name;
    // const famil = this.state.famil;

    return (
      <div className="container">
        <NavBar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        ></NavBar>
        <Routes {...this.state}></Routes>
      </div>
    );
  }
}

export default App;
