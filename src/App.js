import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;
