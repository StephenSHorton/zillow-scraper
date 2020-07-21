import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addScrape } from "../../actions/scrapes";
import getScrape from "./getScrape";

class Form extends Component {
  static propTypes = {
    addScrape: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(`URL: ${e.target.value}`);
    const scrape = getScrape();
    this.props.addScrape(scrape);
    this.setState({
      url: "",
    });
  };

  render() {
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Enter Zillow URL</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              autoComplete="off"
              type="url"
              name="url"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addScrape })(Form);
