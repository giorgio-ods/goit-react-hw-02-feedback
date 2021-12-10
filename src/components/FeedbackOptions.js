import PropTypes from 'prop-types';

export default function FeedbackOptions({options, onFeedbackIncrement}) {
    return (
    <div>
      {options.map(option => (
        <button
          type="button"
          key={option}
          status={option}
          onClick={() => onFeedbackIncrement(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
    option: PropTypes.arrayOf(PropTypes.string)
}