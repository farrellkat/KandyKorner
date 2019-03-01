import React, { Component } from 'react'
import employeeLogo from "../img/people.png"
import discontinue from "./ApplicationViews"
import food from "../img/food.png"

class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            <img src={employeeLogo} alt="employee logo" className="employeeLogo" />
            <h3 className="employeeHeader">Employee List</h3>
            {
                this.props.employees.map(employee =>
                    <div key={`employee--${employee.id}`} className="employeeContainer">
                        {employee.firstName} {employee.lastName}
                        <button className="delButton" onClick={() => this.props.discontinue("employees", employee.id)}><img src={food} alt="food" className="foodX" /></button>
                    </div>
                    )
                }
            </section>
        )
    }
}

export default EmployeeList