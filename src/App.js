import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutRoute from "./camponent/pages/About";
import Api from "./camponent/pages/api";
import HomeRoute from "./camponent/pages/Home";
import Servises from "./camponent/pages/Servises";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route path="/About" element={<AboutRoute />} />
      <Route path="/Servises" element={<Servises />} />
      <Route path="/api" element={<Api />} />
    </Routes>
  );
}

export default App;
