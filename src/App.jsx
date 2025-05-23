import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Aquí se agregarían más rutas en el futuro */}
      </Routes>
    </Router>
  )
}

export default App
