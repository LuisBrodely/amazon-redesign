import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from './pages/Register'
import Index from "./pages/Index";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/index/*" element={<Index />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
