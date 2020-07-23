import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Draggable, Droppable } from "react-beautiful-dnd";
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
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.scrapes.map((scrape, index) => (
              <Droppable key={scrape.id}>
                <Draggable draggableId={scrape.id} index={index}>
                  <tr>
                    <td>
                      {scrape.propertyImage !== "" ? (
                        <img
                          src={scrape.propertyImage}
                          alt="preview"
                          width="175"
                          height="125"
                        />
                      ) : (
                        // <div className="no-image"></div>
                        <img
                          src="https://sisterhoodofstyle.com/wp-content/uploads/2018/02/no-image-1.jpg"
                          alt="no image found"
                          width="175"
                          height="125"
                        />
                      )}
                    </td>
                    <td>{scrape.type}</td>
                    <td>{scrape.bedrooms}</td>
                    <td>{scrape.bathrooms}</td>
                    <td>{scrape.yearBuilt}</td>
                    <td>{scrape.squareFeet}</td>
                    <td>
                      <a
                        className="btn btn-success btn-sm"
                        href={scrape.zillowUrl}
                        target="_blank"
                        referrerPolicy="no-refferrer"
                      >
                        View
                      </a>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={this.props.deleteScrape.bind(this, scrape.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </Draggable>
              </Droppable>
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
