import { BrowserRouter, Routes , Route} from "react-router-dom";
import App from "../App";
import Menu from "../Menu";

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </BrowserRouter>
    )
}