import './App.css';
import Product from './Pages/Product';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Pages/Home';
import Admin from './Pages/Admin';
import MainRoutes from './Pages/MainRoutes';
import Footer from './Components/Footer/Footer';
// import PaymentPage from './Pages/PaymentPage'


function App() {
  return (
      <div className="App">
        <Navbar/>
        <Home/>
        {/* <Admin/>
        <Product/> */}
        {/* <MainRoutes/> */}
        {/* <PaymentPage/> */}

        <Footer/>

      </div>
  );
}

export default App;