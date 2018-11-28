import React from 'react';

class Pet extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        foodLevel = 100,
        sleepLevel = 0,
        energyLevel = 0
};

    this.FeedButton = this.FeedButton.bind(this);
    this.SleepButton = this.SleepButton.bind(this);
    this.PlayButton = this.PlayButton.bind(this);
    this.handleFoodCounter = this.handleFoodCounter.bind(this);
    this.handleSleepCounter = this.handleSleepCounter.bind(this);
    this.handleEnergyLevel = this.handleEnergyLevel.bind(this);
    this.handleStartGame = this.handleStartGame.bind(this);
    }

    componentDidMount() {
        setTimeout(this.handleStartGame, 4000)
    }

    FeedButton() {
        if (this.state.foodLevel <= 90) {
            this.setState({ foodLevel: this.state.foodLevel +10});
        } else if (this.state.foodLevel >= 100) {
            this.setState({ foodLevel: 100});
        }
    }

    SleepButton() {
        if (this.state.sleepLevel >= 10) {
            this.setState({ sleepLevel: this.state.sleepLevel -10});
        } else if (this.state.sleepLevel <= 0) {
            this.setState({ sleepLevel: 0});
        }
    }

    PlayButton() {
        if (this.state.energyLevel >= 10) {
            this.setState({ energyLevel: this.state.energyLevel -10});
        } else if (this.state.energyLevel <= 0) {
            this.setState({ energyLevel: 0});
        }
    }





    render () {
    return (
        <div>
        <style jsx>
        {`
          background-image: url('')
        
        `}
        </style>
        </div>
    )
}