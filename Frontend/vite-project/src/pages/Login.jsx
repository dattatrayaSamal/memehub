import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("https://memehub-vfch.onrender.com/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-700 via-indigo-700 to-blue-600">
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-4xl font-extrabold text-center text-indigo-900 mb-8">
          Welcome Back
        </h2>
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-6 text-center font-semibold">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="peer placeholder-transparent h-12 w-full border-b-2 border-indigo-500 focus:outline-none focus:border-indigo-700"
              placeholder="Email address"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-5 text-indigo-600 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
            >
              Email Address
            </label>
          </div>

          <div className="relative">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="peer placeholder-transparent h-12 w-full border-b-2 border-indigo-500 focus:outline-none focus:border-indigo-700"
              placeholder="Password"
            />
            <label
              htmlFor="password"
              className="absolute left-0 -top-5 text-indigo-600 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-indigo-700 font-medium">
          Don't have an account?{" "}
          <Link to="/register" className="underline hover:text-indigo-900">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
