import React, { Component } from 'react';


class Employee extends Component {

    render() {
        return (

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map(result => (
                            <tr>
                                <th scope="row"><img src={result.picture.thumbnail} /></th>
                                <td>{result.name.first} {result.name.last}</td>
                                <td>{result.phone}</td>
                                <td>{result.email}</td>
                                <td>{result.dob.date}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
}
export default Employee;