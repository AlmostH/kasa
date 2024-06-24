import{ BrowserRouter, Routes, Route} from "react-router-dom";
import "../css/app.scss";
import Home from "./Home";
import Apropos from "./Apropos";
import Error from "./Error";
import Logement from "./Logement";





function App() {
  return (
  
    <BrowserRouter>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/apropos" element={<Apropos />} />
    <Route path="/logement/:id" element={ <Logement />} />
    <Route path="*" element={ <Error />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App;
