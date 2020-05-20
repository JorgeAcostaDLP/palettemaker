import React, { Component } from 'react';
import NewPaletteForm from './NewPaletteForm';
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
          path='/palette/new'
          render={() => <NewPaletteForm></NewPaletteForm>}></Route>
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={(props) => (
            <SingleColorPalette
              colorId={props.match.params.colorId}
              palette={generatePalette(
                findPalette(props.match.params.paletteId)
              )}></SingleColorPalette>
          )}></Route>
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
      </Switch>
    );
  }
}

export default App;
