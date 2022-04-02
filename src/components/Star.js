import React from 'react';
import './star.css';

const Star = ({ rating }) => {
  if (rating > 0) {
    return (
      <>
        <span className="score">
          <div className="score-wrap">
            <span className="stars-active" style={{ width: `${rating}%` }}>
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </span>
            <span className="stars-inactive">
              <i className="fa fa-star-o" aria-hidden="true" />
              <i className="fa fa-star-o" aria-hidden="true" />
              <i className="fa fa-star-o" aria-hidden="true" />
              <i className="fa fa-star-o" aria-hidden="true" />
              <i className="fa fa-star-o" aria-hidden="true" />
            </span>
          </div>
        </span>
      </>
    );
  } else {
    return (
      <>
        <div className="score-wrap">
          <span className="stars-active" style={{ width: '0%' }}>
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
          </span>
          <span className="stars-inactive">
            <i className="fa fa-star-o" aria-hidden="true" />
            <i className="fa fa-star-o" aria-hidden="true" />
            <i className="fa fa-star-o" aria-hidden="true" />
            <i className="fa fa-star-o" aria-hidden="true" />
            <i className="fa fa-star-o" aria-hidden="true" />
          </span>
        </div>
      </>
    );
  }
};

export default Star;
