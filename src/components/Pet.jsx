import React from 'react';
import agumonStand from '../img/agumonStand';
import agumonTired from '../img/agumonTired';

class Pet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodLevel: 100,
            sleepLevel: 0,
            energyLevel: 0
        };

        this.FeedButton = this.FeedButton.bind(this);
        this.SleepButton = this.SleepButton.bind(this);
        this.PlayButton = this.PlayButton.bind(this);
        this.handleFoodCounter = this.handleFoodCounter.bind(this);
        this.handleSleepCounter = this.handleSleepCounter.bind(this);
        this.handleEnergyConter = this.handleEnergyCounter.bind(this);
        this.handleStartGame = this.handleStartGame.bind(this);
    }

    componentDidMount() {
        setTimeout(this.handleStartGame, 4000);
    }

    FeedButton() {
        if (this.state.foodLevel <= 90) {
            this.setState({ foodLevel: this.state.foodLevel + 10 });
        } else if (this.state.foodLevel >= 100) {
            this.setState({ foodLevel: 100 });
        }
    }

    SleepButton() {
        if (this.state.sleepLevel >= 10) {
            this.setState({ sleepLevel: this.state.sleepLevel - 10 });
        } else if (this.state.sleepLevel <= 0) {
            this.setState({ sleepLevel: 0 });
        }
    }

    PlayButton() {
        if (this.state.energyLevel >= 10) {
            this.setState({ energyLevel: this.state.energyLevel - 10 });
        } else if (this.state.energyLevel <= 0) {
            this.setState({ energyLevel: 0 });
        }
    }

    handleStartGame() {
        this.setFoodGame = setInterval(() =>
            this.handleFoodCounter(),
            1000
        );
        this.setSleepGame = setInterval(() =>
            this.handleSleepCounter(),
            1000
        );
        this.setEnergyGame = setInterval(() =>
            this.handleEnergyCounter(),
            1000
        );
    }

    handleFoodCounter() {
        this.setState({ foodLevel: this.state.foodLevel - 10 });
        if (this.state.foodLevel === 0) {
            clearInterval(this.setFoodGame);
        }
    }

    handleSleepCounter() {
        this.setState({ sleepLevel: this.state.sleepLevel + 10 });
        if (this.state.sleepLevel === 100) {
            clearInterval(this.setSleepGame);
        }
    }

    handleEnergyCounter() {
        this.setState({ energyLevel: this.state.energyLevel + 10 });
        if (this.state.energyLevel === 100) {
            clearInterval(this.setEnergyGame);
        }
    }

    render() {
        return (
            <div>
                <style jsx>
                    {`
          background-image: url('')
        
        `}
                </style>
            </div>
        );
    }
}




export default Pet;