import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Question from "./pages/Question";

function App() {
  return (
    <div className="App bg-black flex gap-20 items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Question" element={<Question />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
