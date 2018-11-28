import React from 'react';
import PropTypes from 'prop-types';

function FeedButton(props) {
  return (
    <div className="button">
      <style jsx >{`
        padding 10px;
       `}</style>
      <button onClick={props.onClickFeedButton}><span>Feed</span></button>
    </div>
  );
}

FeedButton.propTypes = {
  onClickFeedButton: PropTypes.func
};

export default FeedButton;