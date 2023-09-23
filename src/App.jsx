import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import NotFound from "./pages/NotFound";

//components
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="/Space-Tourism-Website" element={<Home />} />
          <Route
            path="/Space-Tourism-Website/Destination"
            element={<Destination />}
          />
          <Route path="/Space-Tourism-Website/Crew" element={<Crew />} />
          <Route
            path="/Space-Tourism-Website/Technology"
            element={<Technology />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
