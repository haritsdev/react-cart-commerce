import React, { useCallback, useState } from 'react';
import './star.css';

const AllStarRating = ({ onClick, setCurrentRating }) => {
  return (
    <div style={{ width: '90%' }}>
      <span
        onClick={() => setCurrentRating(4.5)}
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
        onClick={() => setCurrentRating(3.5)}
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
          Antara 3 &lt; 4
        </p>
      </span>

      <span
        onClick={() => setCurrentRating(3.0)}
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
          Antara 2 &lt; 3
        </p>
      </span>
      <span
        onClick={() => setCurrentRating(2.9)}
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
          &lt; 2
        </p>
      </span>
    </div>
  );
};

export default AllStarRating;
