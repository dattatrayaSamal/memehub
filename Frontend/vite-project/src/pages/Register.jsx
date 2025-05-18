import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("https://memehub-vfch.onrender.com/auth/register", {
        username,
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-700 via-red-700 to-yellow-600">
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-4xl font-extrabold text-center text-red-900 mb-8">
          Create Account
        </h2>
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-6 text-center font-semibold">
            {error}
          </div>
        )}
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="relative">
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="peer placeholder-transparent h-12 w-full border-b-2 border-red-500 focus:outline-none focus:border-red-700"
              placeholder="Username"
            />
            <label
              htmlFor="username"
              className="absolute left-0 -top-5 text-red-600 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
            >
              Username
            </label>
          </div>

          <div className="relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="peer placeholder-transparent h-12 w-full border-b-2 border-red-500 focus:outline-none focus:border-red-700"
              placeholder="Email address"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-5 text-red-600 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
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
              className="peer placeholder-transparent h-12 w-full border-b-2 border-red-500 focus:outline-none focus:border-red-700"
              placeholder="Password"
            />
            <label
              htmlFor="password"
              className="absolute left-0 -top-5 text-red-600 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-red-700 font-medium">
          Already have an account?{" "}
          <Link to="/login" className="underline hover:text-red-900">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
