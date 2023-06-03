import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Cart from '../Cart/cart';
import Books from '../Books/book';
import Header from '../Header/header';
// import LogIn from '../User/userSignIn';
// import Register from '../User/userSignUp';

const Router = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/books" element={<Books />} />
                {/* <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<Register />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
export default Router;