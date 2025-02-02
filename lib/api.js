import axios from 'axios';

// Replace this with your actual API base URL
const API_BASE_URL = 'https://your-api.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // Set timeout (optional)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;