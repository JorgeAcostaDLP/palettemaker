import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import generatePalette from './colorHelpers';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';

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
          render={(props) => (
            <PaletteList colors={seedColors} {...props}></PaletteList>
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
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={() => <SingleColorPalette></SingleColorPalette>}></Route>
      </Switch>
    );
  }
}

export default App;
