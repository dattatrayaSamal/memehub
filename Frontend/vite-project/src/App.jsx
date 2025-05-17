import { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Import your pages/components
import Feed from "./pages/Feed";
import CreateMeme from "./pages/CreateMeme";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Verify token with backend
      axios
        .get("http://localhost:8080/verify", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => setIsAuthenticated(true))
        .catch(() => {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        });
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Show loading while checking auth status
if (isAuthenticated === null) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-purple-700 via-indigo-700 to-blue-600">
      <div className="loader">Loading...</div>
    </div>
  );
}

  return (
    <Router>
      <Routes>
        {/* Public routes with redirect if authenticated */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Register setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />

        {/* Protected routes */}
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Feed />} />
            <Route
              path="/dashboard"
              element={<Dashboard setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="/create" element={<CreateMeme />} />
          </>
        ) : (
          <>
            {/* Redirect to login if not authenticated */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/dashboard" element={<Navigate to="/login" replace />} />
            <Route path="/create" element={<Navigate to="/login" replace />} />
          </>
        )}

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
