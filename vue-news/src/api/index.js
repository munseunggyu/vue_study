import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0",
};

async function fetchList(url) {
  const listData = await axios.get(`${config.baseUrl}${url}`);
  return listData.data;
}

async function fetchUser(name) {
  const userData = await axios.get(`${config.baseUrl}/user/${name}.json`);
  return userData.data;
}

async function fetchItem(id) {
  const itemData = await axios.get(`${config.baseUrl}/item/${id}.json`);
  return itemData.data;
}

export { fetchList, fetchUser, fetchItem };
