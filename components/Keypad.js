import React from 'react';

class Keypad extends React.Component {
  constructor(props){
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onChangeHandler(){
    console.log('Entering password...')
  }

  render(){
    return(
      <div>
      Password:
      <input type="password" onKeyUp={this.onChangeHandler}></input>
      </div>
    )
  }
}

module.exports = Keypad;
