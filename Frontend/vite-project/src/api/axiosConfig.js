import axios from 'axios';

// Create an instance of axios
const apiClient = axios.create({
  baseURL: 'http://localhost:8000', // Default base URL
});

// Add a request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem('jwtToken');
    if (token) {
      // Set the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

export default apiClient;
