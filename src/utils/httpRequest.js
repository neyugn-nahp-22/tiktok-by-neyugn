import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
});

export const get = async (url, options = {}) => {
  const res = await httpRequest.get(url, options);
  return res.data;
};

export default httpRequest;
