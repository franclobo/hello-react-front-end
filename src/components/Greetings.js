import React from 'react';
import PropTypes from 'prop-types';

function Greetings(props) {
  const { greetings } = props;
  return (
    <div>
      {greetings.map((greeting) => (
        <div key={greeting.id}>
          <h1>{greeting.message}</h1>
        </div>
      ))}
    </div>
  );
}

Greetings.propTypes = {
  greetings: PropTypes.arrayOf(PropTypes.object()).isRequired,
};

export default Greetings;
