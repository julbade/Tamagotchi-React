import React from 'react';
import PropTypes from 'prop-types';

function Feed(props) {
  return (
    <div className="numberCounterDisplay">
      <style jsx >{`
          .numberCounterDisplay{
            text-align: center;
            background-color: pink;
            margin: 10px;
            padding: 5px 10px;
          }
          .foodLevel {
            font-size: 30px;
            font-family: monospace;
          }
       `}</style>
      <span>Food Level</span>
      <br />
      <span className="foodLevel">{props.foodLevel}</span>
    </div>
  );
}
Feed.propTypes = {
  foodLevel: PropTypes.number
};

export default Feed;