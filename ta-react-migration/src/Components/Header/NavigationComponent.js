import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class NavigationComponent extends Component {
    render() {
        return (
            <Router>
                <div className="main-navigation">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                customer experience
                        </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="">Dummy</Link>
                                <Link className="dropdown-item" to="">Another action</Link>
                                <Link className="dropdown-item" to="">Something else here</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Commerce
                        </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="">Dummy</Link>
                                <Link className="dropdown-item" to="">Another action</Link>
                                <Link className="dropdown-item" to="">Something else here</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Marketing
                        </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="">Dummy</Link>
                                <Link className="dropdown-item" to="">Another action</Link>
                                <Link className="dropdown-item" to="">Something else here</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                        </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="">Dummy</Link>
                                <Link className="dropdown-item" to="">Another action</Link>
                                <Link className="dropdown-item" to="">Something else here</Link>
                            </div>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="">Work</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Company
                        </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="">Dummy</Link>
                                <Link className="dropdown-item" to="">Another action</Link>
                                <Link className="dropdown-item" to="">Something else here</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">Contact</Link>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </Router>
        )
    }
}
export default NavigationComponent