import {BrowserRouter, Routes, Route } from  'react-router-dom';
import Home from '../Home/Home';
import UserSignIn from '../User/userSignIn';
import UserSignup from '../User/userSignUp';
import Cart from '../Cart/cart';


const Router =() => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/UserSignin" element={<UserSignIn />} />
                <Route path="/UserSignup" element={<UserSignup />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;