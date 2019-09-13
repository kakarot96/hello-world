import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"LifecycleA"
         }
         console.log("LifeCycleA constructor")
     }
     static getDerivedStateFromProps(props,state){
         console.log('LifeCycleA getDerivedStateFromProps')
         return null;
     }
     componentDidMount(){
        console.log('LifeCycleA componentDidMount')
     }

     shouldComponentUpdate(nextProps,nextState){
        console.log('LifeCycleA shouldComponentUpdate')
        return true;
     }
     getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null;
     }
     componentDidUpdate(prevProps,prevState,snapshot){
        console.log('LifeCycleA componentDidUpdate')
        
     }
     clickHandler(){
        this.setState({
            name: 'LifeCycle methods checked'
        })
    }
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <LifeCycleB/>
                <h1>{this.state.name}</h1>
                <button onClick={()=> this.clickHandler()}>Click to Update</button>
            </div>
        )
    }
}

export default LifeCycleA
