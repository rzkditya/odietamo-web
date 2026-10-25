import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import OdeaPage from "./pages/OdeaPage";
import ToromiPage from "./pages/ToromiPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/odea" element={<OdeaPage />} />
      <Route path="/toromi" element={<ToromiPage />} />
    </Routes>
  );
}

export default App;
