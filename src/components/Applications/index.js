import React, { Component } from "react";
import axios from "axios";

export default class Applications extends Component {
  state = {
    applications: null,
    error: false
  };

  loadAsyncData = () => {
    axios
      .get("https://a.anardoni.com/packs/wEMzqYQA?population=_applications")
      .then(res => {
        this.setState({ applications: res.data._applications });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  };

  componentDidMount() {
    this.loadAsyncData();
  }

  render() {
    const { applications, error } = this.state;

    if (error) return <div>error darim :|</div>;
    if (!applications) return <div>loading...</div>;

    return (
      <div className="row">
        {applications.map(app => {
          return (
            <div className="col-4">
              <div className="card mb-2" style={{ width: "18rem" }}>
                <img
                  src={`https://s.anardoni.com/${app.photos.icon.path}`}
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{app.name}</h5>
                  <p className="card-text">{app.content.subtitle}</p>
                  <a
                    href={`https://anardoni.com/ios/app/${app.id}`}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
