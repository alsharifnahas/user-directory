
import React, { Component } from 'react'


class Container extends Component {
    render() {
        return (<div className={`container${this.props.fluid ? "-fluid" : ""} w-100`}>{this.props.children}</div>);
    }
}

export default Container;
