import React from 'react';
import PropTypes from 'prop-types';

function SleepButton(props) {
  return (
    <div className="button">
      <style jsx >{`
     
       `}</style>
      <button onClick={props.onClickSleepButton}><span>Sleep</span></button>
    </div>
  );
}

SleepButton.propTypes = {
  onClickSleepButton: PropTypes.func
};

export default SleepButton;