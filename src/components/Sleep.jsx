import React from 'react';
import PropTypes from 'prop-types';


function Sleep (props) {
  return (
    <div className="numberCounterDisplay">
      <style jsx >{`
          .numberCounterDisplay{
            text-align: center;
            background-color: pink;
            margin: 10px;
            padding: 5px 10px;
          }
          .sleepLevel {
            font-size: 30px;
            font-family: seriff;
          }
       `}</style>
      <span>Sleep Level</span>
      <br />
      <span className="sleepLevel">{props.sleepLevel}</span>
    </div>
  );
}
Sleep.propTypes = {
  sleepLevel: PropTypes.number
};

export default Sleep;