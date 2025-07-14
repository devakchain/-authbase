// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import "./styles/App.css";

/**
 * Root component - defines the main routing structure of the app.
 */
function App() {
  return (
    <Router>
      {/* Global navigation bar */}
      <Navbar />

      {/* Main routes */}
      <Routes>
        <Route path="/" element={<h1>Welcome to AuthBase</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
