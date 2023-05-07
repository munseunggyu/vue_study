const posts = [
  {
    id: 1,
    title: "wow1",
    content: "hey1",
    createAt: "23",
  },
  {
    id: 2,
    title: "wow2",
    content: "hey2",
    createAt: "23",
  },
  {
    id: 3,
    title: "wow3",
    content: "hey3",
    createAt: "23",
  },
  {
    id: 4,
    title: "wow4",
    content: "hey4",
    createAt: "23",
  },
];

export function getPosts() {
  return posts;
}

export function getPostById(id) {
  return posts.find((item) => item.id + "" === id);
}
