import React from 'react';
import Pet from './Pet';
import { Switch, Route } from 'react-router-dom';
import logo from './../assets/images/logo.png';
import frame from './../assets/images/frame.jpeg';


function App() {
  var styles={
    marginLeft: '500px',
    marginRight: '500px',
    display: 'flex',
    
  };

  var styles2={
    borderRadius: '300px 300px',
    height: '650px',
    zIndex: '1',
    position: 'relative',
    left: '500px'
    
  }
  return (
    <div>
      <style jsx global>{`
        body {
          background-color: pink;
        }
    
       `}</style>
      <img style={styles} src={logo}/>
      <img style={styles2} src={frame}/>
      <Switch>
        <Route exact path='/' component={Pet} />
      </Switch>
    </div>
  );
}

export default App;
