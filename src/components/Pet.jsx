import React from 'react';
import LevelBar from './LevelBar';
import Buttons from './Buttons';
import agumonStand from './../assets/images/agumonStand.gif';
import deadPet from './../assets/images/rip.gif';

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodLevel: 100,
      sleepLevel: 100,
      energyLevel: 100,
      petStatus: 0,

      
    };

    this.FeedButton = this.FeedButton.bind(this);
    this.SleepButton = this.SleepButton.bind(this);
    this.PlayButton = this.PlayButton.bind(this);
    this.StartButton = this.StartButton.bind(this);
    this.handleFoodCounter = this.handleFoodCounter.bind(this);
    this.handleSleepCounter = this.handleSleepCounter.bind(this);
    this.handleEnergyConter = this.handleEnergyCounter.bind(this);
    this.handleStartGame = this.handleStartGame.bind(this);
  }


  petAnimation() {
    var petImage = 0;
    if(this.state.foodLevel < 1 && this.state.energyLevel < 1 && this.state.sleepLevel < 1 ) {
      petImage = 1; 
       
    } else if (this.state.foodLevel >= 1, this.state.energyLevel >= 1, this.state.sleepLevel >= 1 ) {
      petImage = 2;
    }
    this.setState({petStatus: petImage});
  }

  StartButton() {
    setTimeout(this.handleStartGame, 1000);
   
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
    clearInterval(this.setFoodGame);
    clearInterval(this.setSleepGame);
    clearInterval(this.setEnergyGame);
    this.setState({foodLevel: 100, sleepLevel: 100, energyLevel: 100});
    this.killPet =  setInterval (() =>
      this.petAnimation(),
    1
    );
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
    this.setState({ sleepLevel: this.state.sleepLevel - 10 });
    if (this.state.sleepLevel === 0) {
      clearInterval(this.setSleepGame);
    }
  }

  handleEnergyCounter() {
    this.setState({ energyLevel: this.state.energyLevel - 10});
    if (this.state.energyLevel === 0 ) {
      clearInterval(this.setEnergyGame);
    }
  }

  
  
  render() {
    let buttonDisabled = null;
    let currentImage = agumonStand;
    if(this.state.petStatus === 2) { 
      currentImage = agumonStand;
    } else if (this.state.petStatus === 1) {
      currentImage = deadPet;
    }

    if (this.state.energyLevel > 0 || this.state.foodLevel > 0 || this.state.sleepLevel > 0){
      buttonDisabled = 
        <Buttons passFeedButton={this.FeedButton}
          passSleepButton={this.SleepButton} 
          passPlayButton={this.PlayButton}
        />;
    }
    else {
      buttonDisabled = null;
    }
    return (
      <div>
        <style jsx>
          {`
        img {
          left:620px;
          bottom: 470px;
          position: relative;
          height: 280px;
          width: 300px;
          z-index: 2;
          border-radius: 90px 90px 
        }
      

        button {
          margin-left: 770px;
          background-color: green;
          padding: 10px;
          margin-top: 20px;
          margin-bottom: 20px;
          color: white;
        }
        `}
        </style>
        <div className='petAnimation'>
          <img src={currentImage}/>
        </div>
        <button onClick = {this.StartButton}>Start</button>
        {buttonDisabled}
        <LevelBar foodLevel={this.state.foodLevel}
          energyLevel={this.state.energyLevel} 
          sleepLevel={this.state.sleepLevel} 
        />
      </div>
    );
  }
}




export default Pet;