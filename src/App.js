import{ Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import "./css/app.scss";
import Logo from "./images/Logo.jpg";
import Menu from "./components/Menu";

function App() {
  return (
    <>
    <header>
    <img src={Logo} />
    < Menu />
    </header>
 
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/apropos" element={<Apropos />} />
    </Routes>
      
      
    </>
  );
}

export default App;
