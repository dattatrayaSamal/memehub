// import React, { useState } from "react";
// import apiClient from "../api/axiosConfig";

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     // try {
//     //   const response = await apiClient.post('/login', formData);
//     //   localStorage.setItem('jwtToken', response.data.token);
//     //   setLoading(false);
//     //   // Redirect to feed on success
//     //   window.location.href = '/';
//     // } catch (error) {
//     //   console.error('Login error:', error);
//     //   setError('Login failed. Please check your credentials.');
//     //   setLoading(false);
//     // }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
