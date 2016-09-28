import React from 'react';

class EyesOnMe extends React.Component {
  constructor(props){
    super(props);
      this.onFocus = this.addFocus.bind(this);
      this.onBlur = this.addBlur.bind(this);
    }
    addFocus(){
      console.log('Good!')
    }
    addBlur(){
      console.log('Hey! Eyes on me!')
    }

  render(){
    return(
      <div>
        <button onFocus={this.addFocus} onBlur={this.addBlur}>Press Me!</button>
      </div>
    )
  }
}

module.exports = EyesOnMe;
