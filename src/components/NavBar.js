import React, { Component } from "react";
import classnames from "classnames";

class NavBar extends Component {
  render() {
    // por bodan : btn-primary
    // khali boodan : btn-outline-primary
    const { currentPage, handlePageChange, children } = this.props;
    return (
      <div className="d-flex justify-content-between align-items-center py-2">
        <button
          className={classnames("btn", {
            "btn-primary": currentPage === "clock",
            "btn-outline-primary": currentPage !== "clock"
          })}
          onClick={() => {
            handlePageChange("clock");
          }}
        >
          Clock
        </button>
        <button
          className={classnames("btn", {
            "btn-primary": currentPage === "information",
            "btn-outline-primary": currentPage !== "information"
          })}
          onClick={() => {
            handlePageChange("information");
          }}
        >
          Information
        </button>
        <button
          className={classnames("btn", {
            "btn-primary": currentPage === "converter",
            "btn-outline-primary": currentPage !== "converter"
          })}
          onClick={() => {
            handlePageChange("converter");
          }}
        >
          Converter
        </button>
        <button
          className={classnames("btn", {
            "btn-primary": currentPage === "alaki",
            "btn-outline-primary": currentPage !== "alaki"
          })}
          onClick={() => {
            handlePageChange("alaki");
          }}
        >
          alaki
        </button>
      </div>
    );
  }
}

export default NavBar;
