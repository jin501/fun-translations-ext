import React, { Component } from 'react';
import './App.css';
import DropDown from './DropDown';
import InputTextBox from './InputTextBox';
import SubmitButton from './SubmitButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header><h1>Weird Translations</h1></header>
        <DropDown />
        <InputTextBox />
        <SubmitButton />
      </div>
    );
  }
}

export default App;
