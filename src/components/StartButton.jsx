import React from 'react';
import PropTypes from 'prop-types';

function StartButton(props) {
    var styles={
        position: 'relative',
        left: '-150',
        bottom: '200',
        backgroundColor: 'green',
        color: 'white'
    }
  return (
    <div className="button">
      <style jsx >{`
        padding: 10px;
       `}</style>
      <button style={styles} onClick={props.onClickStartButton}><span>Start</span></button>
    </div>
  );
}

StartButton.propTypes = {
  onClickStartButton: PropTypes.func,
};

export default StartButton;