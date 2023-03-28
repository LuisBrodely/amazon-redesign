import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from './pages/Register'
import Index from "./pages/Index";
import {ContextProvider} from "./Context";

function App() {
  return (
    <Router>
    <div className="App">
      <ContextProvider>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/index/*" element={<Index />} />
      </Routes>
      </ContextProvider>
    </div>
  </Router>
  );
}

export default App;
