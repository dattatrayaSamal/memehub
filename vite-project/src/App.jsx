import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
import Feed from "./pages/Feed";
import CreateMeme from "./pages/CreateMeme";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

// const useAuth = () => {
//   const token = localStorage.getItem("jwtToken");
//   return !!token;
// };

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = useAuth();
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute>
            <Dashboard />
            // </ProtectedRoute>
          }
        />
        <Route path="/create" element={<CreateMeme />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Feed />} />
        <Route
          path="/create"
          element={
            // <ProtectedRoute>
            <CreateMeme />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
