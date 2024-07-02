import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import DetailPage from "./Components/DetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/details/:productId" element={<DetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
