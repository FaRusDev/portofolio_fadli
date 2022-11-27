import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import './App.css';
import Checkout from "./components/Checkout/Checkout";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path ="/checkout" element={[
            <Header/>,
            <Checkout/>     
          ]}/>

          <Route exact path ="/" element={[
            <Header/>,
            <Home/>     
          ]}/>

          <Route exact path ="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
