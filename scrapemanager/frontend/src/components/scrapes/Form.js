import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addScrape } from "../../actions/scrapes";
import axios from "axios";

class Form extends Component {
  state = {
    url: "",
  };

  static propTypes = {
    addScrape: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    this.setState({
      url: e.target.value,
    });
  };

  returnZPID = (url) => {
    const x = url.lastIndexOf("_zpid");
    const y = url.lastIndexOf("/", x) + 1;
    return url.slice(y, x);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const currentZilUrl = this.state.url;
    const zpid = this.returnZPID(this.state.url);
    axios
      .get(`/zillowproxy/${zpid}`)
      .then((res) => {
        // console.log(res);
        const scrape = { ...res.data, zillowUrl: currentZilUrl };
        console.log(scrape);
        this.props.addScrape(scrape);
      })
      .catch((err) => console.log(err));
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
              onChange={this.handleChange}
              value={this.state.url}
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
