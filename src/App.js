import React, { Component } from "react";
import Section from "./components/Section";
import Stats from "./components/Stats"
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";


class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    addFeedbackCount = option => {
        this.setState(prevState => ({
            [option]: prevState[option] + 1
        }))
    }

    countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    };
    
    countPositivePercentage = () => {
        const { good } = this.state;
        return Math.round((good / this.countTotal()) * 100)
    }

        
    render() {
        const { good, bad, neutral } = this.state;
        return (
            <div>
                <Section title="Cafe Expresso. Please leave feedback">
                    <FeedbackOptions options={Object.keys(this.state)} onFeedbackIncrement={this.addFeedbackCount}/>
                </Section>
                {this.countTotal() === 0 ? (<Notification message="No feedbacks yet" />) :
                    (<Section title="Statistics">
                        <Stats good={good} neutral={neutral} bad={bad} total={this.countTotal()} positivePercentage={this.countPositivePercentage()} />
                    </Section>)}
            </div>
            
        )
}

}

export default App;

