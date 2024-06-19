import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./App.css";
import AbonamentPage from "./components/AbonamentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/abonament-page" element={<AbonamentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
