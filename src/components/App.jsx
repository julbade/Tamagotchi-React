import React from 'react';
import Pet from './Pet';
import { Switch, Route } from 'react-router-dom';
import logo from './../assets/images/logo.png';


function App() {
  var styles={
    marginLeft: '500px',
    marginRight: '500px',
    display: 'flex',
    
  };
  return (
    <div>
      <style jsx global>{`
        
    
       `}</style>
      <img style={styles} src={logo}/>
      <Switch>
        <Route exact path='/' component={Pet} />
      </Switch>
    </div>
  );
}

export default App;
