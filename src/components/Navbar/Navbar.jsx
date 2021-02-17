import React, { Component } from 'react'

class Navbar extends Component {


    render() {
        const style = {
            backgroundColor: "navy",
            color: "white",
            borderBottom: "3px solid red",
            padding: "10px"
        }
        return (
            <nav className="row" style={style}>
                <div className="col">
                    <h1 style={{ margin: "10px" }}>Employee Directory</h1>
                    <p style={{ margin: "20px" }}>Click on the carrots to filter by heading or use the search box to narrow your results</p>
                </div>
            </nav>
        )
    }
}
export default Navbar;