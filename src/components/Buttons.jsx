import React from 'react';
import FeedButton from './FeedButton';
import PlayButton from './PlayButton';
import SleepButton from './SleepButton';
import PropTypes from 'prop-types';



function Buttons (props) {
  function FeedButtonFunc() {
    props.passFeedButton();
  }
  function SleepButtonFunc() {
    props.passSleepButton();
  }
  function PlayButtonFunc() {
    props.passPlayButton();
  }
 

  return (
    <div>
      <style jsx>{`
            display: flex;
            position relative;
            top: 200px;
            left: 650px;
      
            `}</style>
      <FeedButton onClickFeedButton={FeedButtonFunc} />
      <SleepButton onClickSleepButton={SleepButtonFunc} />
      <PlayButton onClickPlayButton={PlayButtonFunc} />
    </div>
  );
}

Buttons.propTypes = {
  passFeedButton: PropTypes.func,
  passSleepButton: PropTypes.func,
  passPlayButton: PropTypes.func,
  passStartButton: PropTypes.func,
};

export default Buttons;