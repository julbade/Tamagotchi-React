import React from 'react';
import Feed from './Feed';
import Sleep from './Sleep';
import Play from './Play';
import PropTypes from 'prop-types';


function LevelBar(props) {
  return (
    <div className="numberCounterDisplay">
      <style jsx >{`
          .numberCounterDisplay{
            background-color: red;
            width: 500px;
            height: 80px;
            display: flex;
            justify-content: space-around;
          }
       `}</style>
      <Feed foodLevel={props.foodLevel}/>
      <Sleep sleepLevel={props.sleepLevel}/>
      <Play energyLevel={props.energyLevel}/>
    </div>
  );
}
LevelBar.propTypes = {
  foodLevel: PropTypes.number,
  sleepLevel: PropTypes.number,
  energyLevel: PropTypes.number
};

export default LevelBar;