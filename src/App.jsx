import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import OdeaPage from "./pages/OdeaPage";
import ToromiPage from "./pages/ToromiPage";
import LandingToromi from "./pages/LandingToromi";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/odea" element={<OdeaPage />} />
      <Route path="/toromiMenu" element={<ToromiPage />} />
      <Route path="/toromi" element={<LandingToromi />} />
    </Routes>
  );
}

export default App;
