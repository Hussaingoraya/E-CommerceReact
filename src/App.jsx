import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import DetailPage from "./Components/DetailPage";
import Category from "./Components/Category";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/category" element={<Category />}/>
          <Route path="/details/:productId" element={<DetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
