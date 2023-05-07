import axios from "axios";

const url = "http://localhost:3000/posts";
export async function getPosts(params) {
  const response = await axios.get(url, { params });
  return response;
}

export async function getPostById(id) {
  const res = await axios.get(`${url}/${id}`);
  return res.data;
}

export async function createPost(data) {
  const res = await axios.post(url, data);
  return res.data;
}
export async function updatePost(id, data) {
  const res = await axios.put(`${url}/${id}`, data);
  return res.data;
}
export async function deletePost(id) {
  const res = await axios.delete(`${url}/${id}`);
  return res.data;
}
