import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, GlowyBackground, HeroSection} from "./components";
import { navItems } from "./data/Data.js";

function App() {
    return (
        <BrowserRouter>
            <GlowyBackground />
            <div>
                <Navbar navItems={navItems} />
                <Routes>
                    <Route path="/" element={<div> <HeroSection /></div>} />
                    <Route path="/about" element={<div>About Page</div>} />
                    <Route
                        path="/services"
                        element={<div>Services Page</div>}
                    />
                    <Route path="/contact" element={<div>Contact Page</div>} />
                    <Route path="/login" element={<div>login Page</div>} />
                    <Route path="/create" element={<div>create Page</div>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

