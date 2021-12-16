import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/home/home"
import Navbar from './Components/header/navbar/navbar';
import Menu from './Components/main/menu/menu';
import Contactos from './Components/main/contactos/contactos';

function App() {
  return (
    <div className="App">

      <Router>
      <Navbar />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/contactos" component={Contactos} />
          <Route path="/menu" component={Menu} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
