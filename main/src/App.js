import "./App.css";
import Home from "./Home page/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Shop from "./Shop page/Shop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
