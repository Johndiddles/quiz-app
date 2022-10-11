import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.component";
import Quiz from "./pages/Quiz/Quiz.component.jsx";
import "./App.css";
import Result from "./pages/Results/Result.component";

function App() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center items-center py-4 px-8">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/results" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
