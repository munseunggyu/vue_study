import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0",
};

async function fetchList(url) {
  const listData = await axios.get(`${config.baseUrl}${url}`);
  return listData.data;
}

export { fetchList };
