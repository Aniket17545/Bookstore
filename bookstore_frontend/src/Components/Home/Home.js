import React from "react";
import './Home.css';
import Header from "../Header/header";
import Footer from '../Footer/footer';

class Home extends React.Component {

    render() {
        return (
            <div>
                

                {/* Banner */}

                <div className="container-fluid">
                    <div className="banner">
                        <img src="./assets/bookshopbanner.jpg" alt="" className="banner_img" />
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Home;