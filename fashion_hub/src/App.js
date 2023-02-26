import './App.css';
import Product from './Pages/Product';
// import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Pages/Home';
import Admin from './Pages/Admin';
import MainRoutes from './Pages/MainRoutes';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/SignIn';
import Signup from './Components/Signup/Signup';
<<<<<<< HEAD
import Loginn from './Components/Login/SignIn';
=======
import Loginn from './Components/Login/Login';
import Navbar from './Components/Product/Navbar';
>>>>>>> a7a700885c7e9d9fceeb329bbcd2d6e72ac1c542
// import PaymentPage from './Pages/PaymentPage'


function App() {
  return (
      <div className="App">
<<<<<<< HEAD
        {/* <Navbar/>
        <Home/> */}
        <Login/>
        {/* <Signup/> */}
=======
        {/* <Navbar/> */}
        <Navbar/>
        {/* <Login/> */}
>>>>>>> a7a700885c7e9d9fceeb329bbcd2d6e72ac1c542
        {/* <Admin/>
        <Product/> */}
        
        <MainRoutes/>
        {/* <PaymentPage/> */}

        <Footer/>

      </div>
  );
}

export default App;