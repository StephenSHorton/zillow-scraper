import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addScrape } from "../../actions/scrapes";
import axios from "axios";

class Form extends Component {
  static propTypes = {
    addScrape: PropTypes.func.isRequired,
  };

  returnZPID = (url) => {
    const x = url.lastIndexOf("_zpid");
    const y = url.lastIndexOf("/", x) + 1;
    return url.slice(y, x);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const url = e.target.value;
    const zpid = this.returnZPID(url);
    axios
      .get(`/zillowproxy/${zpid}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  // onSubmit = (e) => {
  //   // e.preventDefault();
  //   // axios.get(url) //zillowproxy/30666801
  //   const i = url.lastIndexOf("zpid");
  //   console.log(i);
  //   // const scrape = {};
  //   // this.props.addScrape(scrape);
  //   this.setState({
  //     url: "",
  //   });
  // };

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
