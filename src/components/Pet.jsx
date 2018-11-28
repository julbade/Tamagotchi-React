import React from 'react';
import LevelBar from './LevelBar';
import Buttons from './Buttons';
import agumonStand from './../assets/images/agumonStand.gif';
// import agumonTired from './../assets/images/agumonTired.gif_c200';

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodLevel: 100,
      sleepLevel: 100,
      energyLevel: 100
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
    setTimeout(this.handleStartGame, 2000);
  }

  FeedButton() {
    if (this.state.foodLevel <= 90) {
      this.setState({ foodLevel: this.state.foodLevel + 10 });
    } else if (this.state.foodLevel == 100) {
      this.setState({ foodLevel: 100 });
    }
  }

  SleepButton() {
    if (this.state.sleepLevel <= 90) {
      this.setState({ sleepLevel: this.state.sleepLevel + 10 });
    } else if (this.state.sleepLevel == 100) {
      this.setState({ sleepLevel: 100 });
    }
  }

  PlayButton() {
    if (this.state.energyLevel <= 90) {
      this.setState({ energyLevel: this.state.energyLevel + 10 });
    } else if (this.state.energyLevel == 100) {
      this.setState({ energyLevel: 100 });
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
    this.setState({ foodLevel: this.state.foodLevel - 1 });
    if (this.state.foodLevel === 0) {
      clearInterval(this.setFoodGame);
    }
  }

  handleSleepCounter() {
    this.setState({ sleepLevel: this.state.sleepLevel - 1 });
    if (this.state.sleepLevel === 0) {
      clearInterval(this.setSleepGame);
    }
  }

  handleEnergyCounter() {
    this.setState({ energyLevel: this.state.energyLevel - 1 });
    if (this.state.energyLevel === 0 ) {
      clearInterval(this.setEnergyGame);
    }
  }

  tiredPet() {
    this.setState ({ });
  }

  render() {
    return (
      <div>
        <style jsx>
          {`
        img {
          left: 700px;
          position: relative;
        }
        `}
        </style>
        <img src={agumonStand}/>
        <Buttons passFeedButton={this.FeedButton}
          passSleepButton={this.SleepButton} 
          passPlayButton={this.PlayButton} 
        />
        <LevelBar foodLevel={this.state.foodLevel}
          energyLevel={this.state.energyLevel} 
          sleepLevel={this.state.sleepLevel} 
        />
      </div>
    );
  }
}




export default Pet;