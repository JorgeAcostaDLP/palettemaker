import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import generatePalette from './colorHelpers';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';

class App extends Component {
  render() {
    const findPalette = (id) => {
      return seedColors.find(function (palette) {
        return palette.id === id;
      });
    };
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <PaletteList colors={seedColors}></PaletteList>
          )}></Route>
        <Route
          exact
          path='/palette/:id'
          render={(props) => (
            <Palette
              palette={generatePalette(
                findPalette(props.match.params.id, seedColors)
              )}></Palette>
          )}></Route>
      </Switch>
    );
  }
}

export default App;
