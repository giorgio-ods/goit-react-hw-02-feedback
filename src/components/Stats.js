import React from "react";
import PropTypes from 'prop-types';

export default function Stats({good, bad, neutral, total, positivePercentage}) {
    return (
        <div>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
            </ul>
            <p>Total: {total}</p>
            <p>Positive Feedbacks Percentage: {positivePercentage}</p>
        </div>
    )   
}

Stats.propTypes = {
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}