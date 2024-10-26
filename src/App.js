import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<NavBar />} />
       



       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
