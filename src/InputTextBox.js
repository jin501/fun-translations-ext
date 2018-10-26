import React, { Component } from 'react';

class InputTextBox extends Component {
  render() {
    return (
      <div className="InputTextBox">
        <textarea placeholder="Type or highlight text to translate.."></textarea>
      </div>
    );
  }
}

export default InputTextBox;
