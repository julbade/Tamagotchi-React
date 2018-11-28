import React from 'react';
import PropTypes from 'prop-types';

function PlayButton(props) {
  return (
    <div className="button">
      <style jsx >{`
         
       `}</style>
      <button onClick={props.onClickPlayButton}><span>Play</span></button>
    </div>
  );
}

PlayButton.propTypes = {
  onClickPlayButton: PropTypes.func
};

export default PlayButton;