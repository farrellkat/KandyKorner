import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "../../src/components/nav/NavBar.css"
import "../../src/App.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class KandyKorner extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default KandyKorner