export const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_PATH : 'http://localhost:5000/';
export const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL : '';