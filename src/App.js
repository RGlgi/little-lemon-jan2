import './App.css'
import Login from './components/Login'
import About from './components/About'
import PaymentBook from './components/PaymentBook'
import Menu from './components/MenuDataList'
import Reservation from './components/Reservation'
import Cart from './components/Cart'
import Home from './components/Home'
import CartIcon from './Images/shopping-cart-add.png'
import login from './Images/people.png'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import SignUp from './components/SignUp'
import OrderOnline from './components/OrderOnlin'

function App() {
  return (
    <div className="App">
      <meta charSet="utf-8" />
      <title>Home</title>
      <link rel="canonical" href="/" />
      <meta name="Main" content="page1 Little Lemon" />
      <nav className="Nav">
        <Header />

        <ul className="NavList">
          <Link to="/Home" role="button">
            Home
          </Link>
          <Link to="/About" role="button">
            About
          </Link>
          <Link to="/Menu" role="button">
            Menu
          </Link>
          <Link to="/Orderonline" role="button">
            Order Online
          </Link>
          <Link to="/Reservation" role="button">
            Reservation
          </Link>
          <Link to="/Login" role="button">
            <img className="icon" src={login} alt=""></img> Login
          </Link>

          <Link to="/Cart" role="button">
            <img className="icon" src={CartIcon} alt=""></img>
            MyCart
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Orderonline" element={<OrderOnline />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/Reservation" element={<Reservation />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/PaymentBook" element={<PaymentBook />}></Route>
      </Routes>
    </div>
  )
}

export default App
