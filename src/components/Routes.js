
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Apropos from "../pages/Apropos";
import Logement from "../pages/Logement";

export default function Routes(){
    return(
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/apropos" element={<Apropos />} />
    <Route path="*" element={ <Error />} />
    <Route path="/logement/:id" element={ <Logement />} />
    </Routes>
    </BrowserRouter>
    )
}