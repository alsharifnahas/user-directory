import React, { Component } from 'react'
import Col from '../Col/Col';
import Container from '../Container/Container';
import Employee from '../Employee/Employee';
import Row from '../Row/Row';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios'

class EmployeeContainer extends Component {
    state = {
        search: "",
        results: []
    }

    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=100").then(response => {
            this.setState({ results: response.data.results })
        })
    }
    handleInputChange = e => {

        const { name, value } = e.target;

        this.setState({
            [name]: value
        });

        if (this.state.search !== "") {

            this.setState({ results: this.state.results.filter(employee => `${employee.name.first} ${employee.name.last}`.toUpperCase().indexOf(this.state.search.toUpperCase()) > -1) })
        }

    };


    render() {
        return (
            <Container>
                <SearchBar handleInputChange={this.handleInputChange} value={this.state.search} />
                <Row>
                    <Col>
                        <Employee data={this.state.results} search={this.state.search} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default EmployeeContainer;