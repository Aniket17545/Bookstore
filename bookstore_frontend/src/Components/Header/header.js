import React from "react";
import '../Header/header.css';

class Header extends React.Component {

    render() {
        return (
            <div>
                {/* Header Part */}
                {/* <nav className="navbar nav-b">
                    <div className="container-fluid">
                        <a className="logo" href="#!">
                            <img src="./assets/education.svg" alt="" width="40" height="30" className="d-inline-block" />
                            <div className="d-inline-block align-text-top ms-2 l-text">Bookstore</div>
                        </a>
                        <form className="d-flex search" role="search">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search" style={{ width: "500px" }} />
                        </form>

                        <div className="">Abouts</div>
                        <div className="">Home</div>
                        <div className="">Books</div>

                        <div className="text-center pc-nav">
                            <button className="btn p-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-person-circle profile-l"></i>
                            </button>
                            <ul className="dropdown-menu text-center d-item">
                                <li><button className="dropdown-item">Admin</button></li>
                                <li><button className="dropdown-item">Sign In</button></li>
                                <li><button className="dropdown-item">Sign Up</button></li>
                            </ul>
                        </div>

                        <div className="text-center c-nav">
                            <a href="/cart" className="citem">
                                <i className="bi bi-cart cart-l"></i>
                            </a>
                        </div>
                    </div>
                </nav> */}

                <nav className="navbar navbar-expand-lg bg-body-tertiary header">
                    <div className="container-fluid header">
                        {/* <a className="navbar-brand" href="#!">Navbar</a> */}
                        <a class="navbar-brand ms-5 ps-5 brand" href="#!">
                            <img src="./assets/education.svg" alt="" width="35" height="29" class="d-inline-block align-text-bottom" />
                            <span className="ms-2 brandName">BookStore</span>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <form className="d-flex searchForm" role="search">
                                <input className="form-control ms-3" type="search" placeholder="Search" aria-label="Search" />
                                {/* <button className="btn submitBtn" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button> */}
                            </form>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navItem">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#!" style={{color:"#ffffff"}}>Abouts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#!" style={{color:"#ffffff"}}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!" style={{color:"#ffffff"}}>Books</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link navIcon" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#!">Admin</a></li>
                                        <li><a className="dropdown-item" href="#!">Log In</a></li>
                                        <li><a className="dropdown-item" href="#!">Register</a></li>
                                        <li><a className="dropdown-item" href="#!">Log Out</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link navIcon" href="#!">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
export default Header;