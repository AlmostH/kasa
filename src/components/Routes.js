import{Routes} from "react-router-dom";
import { Route } from "react-router-dom";
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/apropos" element={<Apropos />} />
    <Route path="*" element={ <Error />} />
    </Routes>