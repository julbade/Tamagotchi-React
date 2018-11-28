import React from 'react';
import PropTypes from 'prop-types';

function Play(props) {
  return (
    <div className="numberCounterDisplay">
      <style jsx >{`
          .numberCounterDisplay{
            text-align: center;
            background-color: pink;
            margin: 10px;
            padding: 5px 10px;
          }
          .energyNumber {
            font-size: 30px;
            font-family: seriff;
          }
       `}</style>
      <span>Energy Level</span>
      <br />
      <span className="energyNumber">{props.energyLevel}</span>
    </div>
  );
}
Play.propTypes = {
  energyLevel: PropTypes.number
};

export default Play;