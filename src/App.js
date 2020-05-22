import React, { Component } from 'react';
import NewPaletteForm from './NewPaletteForm';
import Palette from './Palette';
import seedColors from './seedColors';
import generatePalette from './colorHelpers';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palettes: seedColors }
    this.findPalette = this.findPalette.bind(this)
    this.savePalette = this.savePalette.bind(this)
  }
  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id
    });
  }
  savePalette = (newPalette) => {
    this.setState({ palettes: [...this.state.palettes, newPalette] })
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/palette/new'
          render={(routeProps) => <NewPaletteForm {...routeProps} savePalette={this.savePalette} palettes={this.state.palettes}></NewPaletteForm>}></Route >
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={(props) => (
            <SingleColorPalette
              colorId={props.match.params.colorId}
              palette={generatePalette(
                this.findPalette(props.match.params.paletteId)
              )}></SingleColorPalette>
          )}></Route>
        <Route
          exact
          path='/'
          render={(props) => (
            <PaletteList colors={this.state.palettes} {...props}></PaletteList>
          )}></Route>
        <Route
          exact
          path='/palette/:id'
          render={(props) => (
            <Palette
              palette={generatePalette(
                this.findPalette(props.match.params.id, this.state.palettes)
              )}></Palette>
          )}></Route>
      </Switch >
    );
  }
}

export default App;
