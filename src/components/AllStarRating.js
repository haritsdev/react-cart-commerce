import React, { useCallback, useState } from 'react';
import './star.css';

const AllStarRating = ({ setCurrentRating, setFilter, dataFilter }) => {
  const handleRating = (rate) => {
    setCurrentRating(rate);
    if (rate === 4.5) {
      const updatedList = dataFilter.filter(
        (x) => parseFloat(x.rating.rate) >= rate
      );
      setFilter(updatedList);
      console.log(updatedList);
    }
    if (rate === 3.5) {
      const updatedList = dataFilter.filter(
        (x) => parseFloat(x.rating.rate) >= rate && x.rating.rate < 4.5
      );
      setFilter(updatedList);
      console.log(updatedList);
    }
    if (rate === 3.0) {
      console.log(rate);
      const updatedList = dataFilter.filter(
        (x) => parseFloat(x.rating.rate) >= rate && x.rating.rate < 3.5
      );
      setFilter(updatedList);
    }
    if (rate === 2.9) {
      const updatedList = dataFilter.filter(
        (x) => parseFloat(x.rating.rate) < 3.0
      );
      setFilter(updatedList);
    }
  };
  return (
    <div style={{ width: '90%' }}>
      <span
        onClick={() => handleRating(4.5)}
        className="score"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        <div className="score-wrap">
          <span className="stars-active" style={{ width: '90%' }}>
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
        <p style={{ fontSize: 17, marginTop: '2px' }}> 4.5 ke atas</p>
      </span>

      <span
        onClick={() => handleRating(3.5)}
        className="score"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        <div className="score-wrap">
          <span className="stars-active" style={{ width: '70%' }}>
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
        <p style={{ fontSize: 17, marginTop: '2px', cursor: 'pointer' }}>
          {' '}
          Antara 3.5 &lt; 4.4
        </p>
      </span>

      <span
        onClick={() => handleRating(3.0)}
        className="score"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        <div className="score-wrap">
          <span
            className="stars-active"
            style={{ width: '50%', cursor: 'pointer' }}
          >
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
        <p style={{ fontSize: 17, marginTop: '2px', cursor: 'pointer' }}>
          {' '}
          Antara 3 &lt; 3.5
        </p>
      </span>
      <span
        onClick={() => handleRating(2.9)}
        className="score"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        {' '}
        <div className="score-wrap">
          <span
            className="stars-active"
            style={{ width: '30%', cursor: 'pointer' }}
          >
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
        <p style={{ fontSize: 17, marginTop: '2px', cursor: 'pointer' }}>
          {' '}
          &lt; 3
        </p>
      </span>
    </div>
  );
};

export default AllStarRating;
