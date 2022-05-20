import { axiosIns } from "../urlPage";

const get = (url) => {
  return axiosIns.get(url);
};

const post = (url, payload) => {
  return axiosIns.post(url, payload);
};

const put = (url, payload) => { 
  return axiosIns.put(url, payload);
};

const deleteAll = (url, payload) => {
  return axiosIns.delete(url, { data: payload });
};

const serviceUtil = { get, post, put, deleteAll };
export default serviceUtil;
