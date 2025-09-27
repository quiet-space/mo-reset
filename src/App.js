import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Program } from "./pages/Program";
import { Education } from "./pages/Education";
import { Location } from "./pages/Location";
import { BrandMissions } from "./pages/BrandMissions";
import { Plant } from "./pages/Plant";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="missions" element={<BrandMissions />} />
        <Route path="plant" element={<Plant />} />
        <Route path="program" element={<Program />} />
        <Route path="education" element={<Education />} />
        <Route path="location" element={<Location />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
