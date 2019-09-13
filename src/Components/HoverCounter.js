import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

 class HoverCounter extends Component {
     
     
    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.eventHandler}>Hovered {this.props.count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)
