// import React, { useState } from "react";
// import apiClient from "../api/axiosConfig";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
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
//     //   await apiClient.post('/register', formData);
//     //   setLoading(false);
//     //   // Redirect to login on success
//     //   window.location.href = '/login';
//     // } catch (error) {
//     //   setLoading(false);
//     //   setError('Registration failed. Please try again.');
//     //   console.error('Registration error:', error);
//     // }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         {loading && <p>Loading...</p>}
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           onChange={handleChange}
//         />
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
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
