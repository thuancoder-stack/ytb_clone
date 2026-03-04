import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/watch/:id" element={<Watch />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}