import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getScrapes, deleteScrape } from "../../actions/scrapes";

class Scrapes extends React.Component {
  static propTypes = {
    scrapes: PropTypes.array.isRequired,
    getScrapes: PropTypes.func.isRequired,
    deleteScrape: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getScrapes();
  }

  render() {
    return (
      <Fragment>
        <h2>Scrapes</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Image</th>
              <th>Type</th>
              <th>Bedrooms</th>
              <th>Bathrooms</th>
              <th>Year Built</th>
              <th>Square Feet</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.scrapes.map((scrape) => (
              <tr key={scrape.id}>
                <td>{scrape.propertyimage}</td>
                <td>{scrape.type}</td>
                <td>{scrape.bedrooms}</td>
                <td>{scrape.bathrooms}</td>
                <td>{scrape.yearbuilt}</td>
                <td>{scrape.squarefeet}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={this.props.deleteScrape.bind(this, scrape.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  scrapes: state.scrapes.scrapes,
});

export default connect(mapStateToProps, { getScrapes, deleteScrape })(Scrapes);
