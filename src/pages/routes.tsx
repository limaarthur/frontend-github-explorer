import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard } from "./Dashboard";
import { Respository } from "./Respository";
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/repository" element={<Respository />} />
      </Routes>
    </BrowserRouter>
  )
}