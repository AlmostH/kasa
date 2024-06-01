import{ BrowserRouter, Routes, Route} from "react-router-dom";
import "./css/app.scss";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Error from "./pages/Error";
import logements from "./logements.json";





function App() {
  return (
  
    <BrowserRouter>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/apropos" element={<Apropos />} />
    <Route path="*" element={ <Error />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App;
