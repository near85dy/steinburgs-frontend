import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.page"
import TaskPage from "./pages/task.page";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<TaskPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
