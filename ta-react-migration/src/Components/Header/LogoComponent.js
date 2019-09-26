import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
class LogoComponent extends Component {
    render() {
        return (
            <Router>
                <div className="logo">
                    <Link to="/home">
                        <img src={require("../../assets/images/ta-logo.png")} alt="logo" />
                    </Link>
                </div>
            </Router>

        )
    }
}
export default LogoComponent;