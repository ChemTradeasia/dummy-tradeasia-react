const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

/**
 * A simple fetch wrapper for making API calls.
 * Allows easy replacement with Axios in the future.
 */
export const fetchApi = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || `API Error: ${response.status}`);
    }
    
    return data;
  } catch (error) {
    console.error('API Request Failed:', error);
    throw error;
  }
};
