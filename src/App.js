import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home';

import './App.css';

class App extends React.Component{



  render(){
    return(
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
    );
  }

}

export default App;
