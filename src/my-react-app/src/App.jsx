import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="w-screen min-h-screen  bg-richblack-900 font-inter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </div>
  )
}

export default App
