import React from 'react';

import { Switch } from 'react-router-dom';

import SubRouting from './components/Routes/SubRouting';

import './App.css';
import { routesConfig } from './config/routesConfig';


function App() {
  return (
    <div className="container">
      <Switch>
        {routesConfig.map((route, i) => (
          <SubRouting key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
