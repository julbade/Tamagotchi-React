import React from 'react';
import Pet from './Pet';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <style jsx global>{`
       * {
         box-sizing: border-box;
         margin: 0;
         padding: 0;
       }
       body {
         background-color: pink;
         width: 100%;
       }
       `}</style>
      <Switch>
        <Route exact path='/' component={Pet} />
      </Switch>
    </div>
  );
}

export default App;
