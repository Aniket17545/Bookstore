import React from "react";
import './Home.css';

class Home extends React.Component {

    render() {
        return (
            <div>
                {/* Header Part */}
                <nav className="navbar nav-b">
                    <div className="container-fluid">
                        <a className="navbar-brand logo" href="#!" style={{ color: "#FFFFFF" }}>
                            <img src="./assets/education.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                            <div className="text" >Bookstore</div>
                        </a>
                        <form className="d-flex search" role="search">
                            <input class="form-control me-4 ms-3" type="search" placeholder="Search" aria-label="Search" style={{ width: "500px" }} />
                        </form>

                        <div className="col text-end">
                            <a href="#!" className="pc-nav">
                                <i class="bi bi-person-circle profile-l"></i>
                                <div>Profile</div>
                            </a>
                        </div>

                        <div className="col px-4">
                            <a href="#!" className="pc-nav">
                                <i className="bi bi-cart cart-l"></i>
                                <div>Cart</div>
                            </a>
                        </div>
                    </div>
                </nav>

                {/* Body Part */}
                <div className="d-flex justify-content-center">
                    <div className="container ">
                        <div className="row pt-2">
                            <div className="col">
                                <h5 className="pt-3">Books</h5>
                            </div>
                            {/* <div className="col">
                                <select className="form-control">
                                    <option value="0" disabled selected>Sort by Relevance</option>
                                    <option value="Price: Low to High">Price: Low to High</option>
                                    <option value="Price: High to Low">Price: High to Low</option>
                                    <option value="Newest Arrivals">Newest Arrivals</option>                                
                                </select>
                            </div> */}
                            <div className="col text-end dropdown pe-5 drop">
                                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort by Relevance
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#!">Price: Low to High</a></li>
                                    <li><a className="dropdown-item" href="#!">Price: High to Low</a></li>
                                    <li><a className="dropdown-item" href="#!">Newest Arrivals</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="d-flex pt-1">
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                                {/* <div className="card" style={{ width: "15rem" }}>
                                        <div className="img-i" style={myStyle}>
                                            <img src="./assets/Image 7@2x.png" class="card-img-top" alt="" height="150" />
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">BookName</h5>
                                            <p className="card-text">By Author Name</p>
                                            <a href="#!" className="btn btn-success">4.6</a>
                                            <p className="card-text">Rs.1200</p>
                                        </div>
                                    </div> */}
                            </div>
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 box">
                                <div className="t-box item">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 box">
                                <div className="t-box item">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 box">
                                <div className="t-box item">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="mt-5">
                            <ul className="pagination justify-content-center">
                                <li className="page-item me-5 arrow">
                                    <a className="page-link" href="#!">
                                        <span>{' < '}</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#!">1</a></li>
                                <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                <li className="page-item"><a className="page-link" href="#!">4</a></li>
                                <li className="page-item me-5"><a className="page-link" href="#!">5</a></li>
                                <li className="page-item arrow">
                                    <a className="page-link" href="#!">
                                        <span>{' > '}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;