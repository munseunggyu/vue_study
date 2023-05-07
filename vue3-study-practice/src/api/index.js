import axios from "axios";

function create(baseURL, options) {
  const instance = axios.create({
    baseURL: baseURL,
    ...options,
  });
  return instance;
}
const url = `${import.meta.env.VITE_APP_API_URL}/posts`;
export const posts = create(url);
