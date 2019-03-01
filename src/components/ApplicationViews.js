import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import EmployeeList from './EmployeeList'
import CandyList from './CandyList'
import StoreList from './StoreList'
import apiManager from '../modules/apiManager';

export default class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    discontinue = (item, id) => {
        apiManager.removeAndList(item, id)
            .then(array => this.setState({
                [`${item}`]: array
            })
            )
    }

    componentDidMount() {
        apiManager.getAll("stores").then(stores => {
            this.setState({
                stores: stores
            })
        })
            .then(() => apiManager.getAll("employees").then(employees => {
                this.setState({
                    employees: employees
                })
            }))
            .then(() => apiManager.getAll("candyTypes").then(candyTypes => {
                this.setState({
                    candyTypes: candyTypes
                })
            }))
            .then(() => apiManager.getAll("candies").then(candies => {
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
                    return <EmployeeList discontinue={this.discontinue} employees={this.state.employees} />
                }} />
                <Route exact path="/candies" render={(props) => {
                    return <CandyList discontinue={this.discontinue} candyTypes={this.state.candyTypes}
                        candies={this.state.candies} />
                }} />
            </React.Fragment>
        )
    }
}