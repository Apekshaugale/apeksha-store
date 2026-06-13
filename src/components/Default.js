import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Default extends Component {
  render() {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">

          <div className="col-10 col-md-8 text-center">

            <div className="card shadow border-0 p-5">

              <h1 className="display-1 text-danger">
                404
              </h1>

              <h2 className="mb-3">
                Oops! Page Not Found
              </h2>

              <p className="text-muted">
                Sorry, the page you are looking for does not exist.
              </p>

              <p>
                Requested URL:
                <span className="text-danger font-weight-bold">
                  {" "}
                  {this.props.location.pathname}
                </span>
              </p>

              <div className="mt-4">
                <Link to="/">
                  <button className="btn btn-primary px-4 py-2">
                    Back to Home
                  </button>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }
}