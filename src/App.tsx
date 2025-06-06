import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login.page"
import TaskPage from "./pages/task.page";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if(!localStorage.getItem('token') && window.location.pathname != '/login') window.location.assign('../login')
  })
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/tasks" element={<TaskPage />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
