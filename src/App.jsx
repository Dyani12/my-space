import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HabitsPage } from "./pages/HabitsPage"
import { TasksPage } from "./pages/TasksPage"
import { TimerPage } from "./pages/TimerPage"
import { QuickSavePage } from "./pages/QuickSavePage"
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/habits" element={<HabitsPage />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/quick-save" element={<QuickSavePage />} />  
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
