import React, { Component } from 'react';
import './App.css';
import DropDown from './DropDown';
import InputTextBox from './InputTextBox';
import SubmitButton from './SubmitButton';

class App extends Component {
  constructor(){
    super();
    this.state = {
      text: "",
      translatedText: ""
    }
  }

  handleInputChange = (e) => {
   this.setState({text: e.target.value});
}

  handleSubmit = (e) => {
    // debugger;
    e.preventDefault();
    let translationType = e.target[0].value;
    let text = e.target[1].value;
    let url = `https://api.funtranslations.com/translate/${translationType}.json`

    console.log('hi', text, url)

    fetch(url)
      .then((response)=>{
        let data = response.json();
        return data;
      }).then((data)=>{
        console.log(data)
      })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Weird Translations</h1>
        </header>

        <form onSubmit={this.handleSubmit}>
          <DropDown />
          <textarea
            value={this.state.text}
            onChange={this.handleInputChange}
            placeholder="Type or highlight text to translate.."
            type="text">
          </textarea>
          <input type="submit" value="translate" />
        </form>
      </div>
    );
  }
}

export default App;
