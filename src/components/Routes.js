
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Apropos from "../pages/Apropos";

export default function Routes(){
    return(
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/apropos" element={<Apropos />} />
    <Route path="*" element={ <Error />} />
    </Routes>
    </BrowserRouter>
    )
}