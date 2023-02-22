import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Components/Home/Pages/Home';


function App() {
  return (
    
      <div className="App">
        <Navbar/>
        <Home/>
      </div>
    
  );
}

export default App;
