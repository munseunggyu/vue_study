import { posts } from ".";
export async function getPosts(params) {
  const response = await posts.get("/", { params });
  return response;
}

export async function getPostById(id) {
  const res = await posts.get(`/${id}`);
  return res.data;
}

export async function createPost(data) {
  const res = await posts.post("/", data);
  return res.data;
}
export async function updatePost(id, data) {
  const res = await posts.put(`/${id}`, data);
  return res.data;
}
export async function deletePost(id) {
  const res = await posts.delete(`/${id}`);
  return res.data;
}
