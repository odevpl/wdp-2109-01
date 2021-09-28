import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

const CountComments = props => {
  const comments = props.comments;
  return (
    <p>
      <FontAwesomeIcon icon={faComment}></FontAwesomeIcon> {comments.length}
      <span> comments</span>
    </p>
  );
};

CountComments.propTypes = {
  comments: PropTypes.node,
};

export default CountComments;
