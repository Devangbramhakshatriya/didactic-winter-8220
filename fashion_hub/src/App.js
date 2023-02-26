import './App.css';
import Product from './Pages/Product';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Pages/Home';
import Admin from './Pages/Admin';
import MainRoutes from './Pages/MainRoutes';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/SignIn';
import Signup from './Components/Signup/Signup';
import Loginn from './Components/Login/SignIn';
// import PaymentPage from './Pages/PaymentPage'


function App() {
  return (
      <div className="App">
        {/* <Navbar/>
        <Home/> */}
        <Login/>
        {/* <Signup/> */}
        {/* <Admin/>
        <Product/> */}
        {/* <MainRoutes/> */}
        {/* <PaymentPage/> */}

        <Footer/>

      </div>
  );
}

export default App;
