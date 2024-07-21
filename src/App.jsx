import { Routes, Route } from "react-router-dom";
import Description from "./description/Description";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/description" element={<Description />} />
    </Routes>
  );
}

export default App;
