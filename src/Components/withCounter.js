import React, { Component } from "react";
const UpdatedComponent = OriginalComponent => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
           count:0
      }
  }

  clickHandler = ()=>{
      this.setState((prevState)=>({
         count:prevState.count+1
     }))
  }
    render() {
      return <OriginalComponent eventHandler={this.clickHandler} count={this.state.count}/>;
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
