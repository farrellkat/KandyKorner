import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import EmployeeList from './EmployeeList'
import CandyList from './CandyList'
import StoreList from './StoreList'

export default class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    discontinue = id => {
        fetch(`http://localhost:5002/candies/${id}`, {
            method: "DELETE"
        }).then(() =>
            fetch("http://localhost:5002/candies"))
            .then(res => res.json())
            .then(candies => this.setState({
                candies: candies
            })
            )
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/stores")
            .then(r => r.json())
            .then(stores => newState.stores = stores)
            .then(() => fetch("http://localhost:5002/employees")
                .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/candyTypes")
                .then(r => r.json()))
            .then(candyTypes => newState.candyTypes = candyTypes)
            .then(() => fetch("http://localhost:5002/candies")
                .then(r => r.json()))
            .then(candies => newState.candies = candies)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/candies" render={(props) => {
                    return <CandyList discontinue={this.discontinue} candyTypes={this.state.candyTypes}
                        candies={this.state.candies} />
                }} />
            </React.Fragment>
        )
    }
}