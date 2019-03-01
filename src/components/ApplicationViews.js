import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import EmployeeList from './EmployeeList'
import CandyList from './CandyList'
import StoreList from './StoreList'
import storeManager from '../modules/storeManager';
import employeeManager from '../modules/employeeManager';
import candyTypeManager from '../modules/candyTypeManager';
import candyManager from '../modules/candyManager';

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
        storeManager.getAll().then(stores => {
            this.setState({
                stores: stores
            })
        })
            .then(() => employeeManager.getAll().then(employees => {
                this.setState({
                    employees: employees
                })
            }))
            .then(() => candyTypeManager.getAll().then(candyTypes => {
                this.setState({
                    candyTypes: candyTypes
                })
            }))
            .then(() => candyManager.getAll().then(candies => {
                this.setState({
                    candies: candies
                })
            }))
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