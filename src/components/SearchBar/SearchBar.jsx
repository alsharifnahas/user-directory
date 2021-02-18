import React, { Component } from 'react'


export default class SearchBar extends Component {
    render() {
        return (
            <div className="row bg-light p-2 w-100" >
                <div className="col">
                    <input
                        type="text"
                        onChange={this.props.handleInputChange}
                        value={this.props.value}
                        name="search"
                    />

                </div>
            </div>
        )
    }
}
