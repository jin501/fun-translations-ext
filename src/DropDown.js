import React, { Component } from 'react';

class DropDown extends Component {
  render() {
    return (
      <div className="DropDown">
        <select>
          <option value="yoda">Yoda</option>
          <option value="pirate">Pirate</option>
          <option value="valspeak">Valspeak</option>

        </select>
      </div>
    );
  }
}

export default DropDown;
