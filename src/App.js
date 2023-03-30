import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutRoute from "./camponent/pages/About";
import HomeRoute from "./camponent/pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route path="About" element={<AboutRoute />} />
    </Routes>
  );
}

export default App;
