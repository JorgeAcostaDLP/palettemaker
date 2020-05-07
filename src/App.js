import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import generatePalette from './colorHelpers';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={() => <h1>PALETTE LIST GOES HERE</h1>}></Route>
        <Route
          exact
          path='/palette/:id'
          render={() => <h1>iNDIVIDUAL palette</h1>}></Route>
      </Switch>
      /* <div>
        <Palette palette={generatePalette(seedColors[4])}></Palette>
      </div> */
    );
  }
}

export default App;
