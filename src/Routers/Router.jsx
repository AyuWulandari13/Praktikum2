import { BrowserRouter, Routes , Route} from "react-router-dom";
import AboutUs from "../AboutUs";
import App from "../App";
import Menu from "../Menu";
import Order from "../Order";

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/order" element={<Order />} />
                <Route path="/aboutus" element={<AboutUs/>} />

            </Routes>
        </BrowserRouter>
    )
}