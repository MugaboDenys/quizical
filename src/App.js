import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quiz1 from "./pages/Quiz1";

function App() {
  return (
    <div className="App bg-black flex gap-20 items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/questions" element={<Quiz1 />}></Route>
        </Routes>
      </BrowserRouter>
   
      {/* <Button1 text={"Start quiz"} className={"px-10"} />
      <Button2 text={"Cabbage Patch Kids"} className={"text-xl"} />
      <Button3 text={"Mercury"} className={"text-xl"} />  */}
    </div>
  );
}

export default App;
