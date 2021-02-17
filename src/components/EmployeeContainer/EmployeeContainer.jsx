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
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };


    render() {
        return (
            <Container>
                {console.log(this.state.search)}
                <SearchBar handleInputChange={this.handleInputChange} />
                <Row>
                    <Col>
                        <Employee data={this.state.results} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default EmployeeContainer;