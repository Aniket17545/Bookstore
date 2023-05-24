import React from "react";
import "./userCss.css";

class UserSignIn extends React.Component {

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <div className="container">
                        <div className="child1">
                            <div className="subchild1">
                                <img src="./assets/signinlogo.png" alt="" className="logo_img" />
                                <div className="text">
                                    Online Book Shopping
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center child2">
                            <form className="ms-5">

                                <div className="d-flex align-items-center">
                                    <span className="h1 fw-bold">Sign In</span>
                                </div>

                                <h5 className="fw-normal" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                                <div className="form-outline mt-4">
                                    <label className="form-label" for="form2Example17">Email Id</label>
                                    <input type="email" id="form2Example17" className="form-control" style={{width:"24rem"}}/>
                                </div>

                                <div className="form-outline mt-3">
                                    <label className="form-label" for="form2Example27">Password</label>
                                    <input type="password" id="form2Example27" className="form-control" style={{width:"24rem"}}/>
                                </div>

                                <div className="mt-4 mb-2">
                                    <button className="btn btn-lg btn-block btn-l" type="button" style={{ backgroundColor: "#A03037",color:"#fff", width:"24rem" }}>Sign In</button>
                                </div>

                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <p className="mt-2 lg-2" style={{ color: "#393f81" }}>Don't have an account? <a href="#!"
                                    style={{ color: "#393f81" }}>Register here</a></p>
                                <a href="#!" className="small text-muted">Terms of use.</a>
                                <a href="#!" className="small text-muted">Privacy policy</a>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <section className="vh-200" style={{ backgroundColor: "#ADADAD" }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-10">
                                <div className="card" style={{ borderRadius: "1rem" }}>
                                    <div className="row g-0">
                                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                                            <img src="./assets/.png" alt="login form" className="img-fluid img-l" />
                                        </div>
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 p-lg-5 text-black">

                                                <form>

                                                    <div className="d-flex align-items-center mb-3 pb-1">
                                                        <span className="h1 fw-bold mb-0">Sign In</span>
                                                    </div>

                                                    <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" for="form2Example17">Email address</label>
                                                        <input type="email" id="form2Example17" className="form-control form-control-lg" />
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" for="form2Example27">Password</label>
                                                        <input type="password" id="form2Example27" className="form-control form-control-lg" />
                                                        <i className="far fa-eye icon" id="togglePassword" style={{marginLeft: "410px"}}></i>
                                                    </div>

                                                    <div className="pt-1 mb-4">
                                                        <button className="btn btn-lg btn-block btn-l" type="button" style={{ backgroundColor: "#A03037" }}>Sign In</button>
                                                    </div>

                                                    <a className="small text-muted" href="#!">Forgot password?</a>
                                                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <a href="#!"
                                                        style={{ color: "#393f81" }}>Register here</a></p>
                                                    <a href="#!" className="small text-muted">Terms of use.</a>
                                                    <a href="#!" className="small text-muted">Privacy policy</a>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        )
    }
}

export default UserSignIn;