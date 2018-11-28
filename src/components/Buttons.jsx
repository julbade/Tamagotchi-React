import React from 'react';
import FeedButton from './FeedButton';
import PlayButton from './PlayButton';
import SleepButton from './SleepButton';
import PropTypes from 'prop-types';
import StartButton from './StartButton';


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
  function StartButtonFunc() {
    props.passStartButton();
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
      <StartButton onClickStartButton={StartButtonFunc}/>
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