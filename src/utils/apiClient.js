import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/', // Replace with your API base URL
  timeout: 10000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add other default headers if needed
  },
});

// Optionally, you can add interceptors for request and response
apiClient.interceptors.request.use(
  (config) => {
    // Modify request config before sending the request
    // For example, add an authorization token
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    // Handle response data
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default apiClient;