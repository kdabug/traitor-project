import axios from "axios";
const BASE_URL = "";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem("jwt")}`
  }
});

const createNewUser = async user => {
  const respData = await axios.post(`${BASE_URL}/users/register`, user);
  console.log("this is create user: resp", respData);
  return respData;
};

const editUser = async (id, edits) => {
  console.log("making an edit request with this data", edits);
  const respData = await api.put(`/users/${id}/edit`, edits);
  console.log("this is edit user: resp", respData);
  return respData;
};

const loginUser = async user => {
  const respData = await axios.post(`${BASE_URL}/users/login`, user);
  console.log("this is login user: resp", respData);
  return respData;
};

const fetchUserBank = async () => {
  const respData = await api.get(`/tickers`);
  return respData;
};

const fetchTickerData = async ticker => {
  console.log("this is fetchTickeerData station", ticker);
  const respData = await api.get(`/tickers/${ticker}`);
  return respData.data;
};

const createFavoriteTicker = async (id, user_id) => {
  console.log(id, user_id);
  const resp = await api.post(`/tickers/${id}/user/${user_id}/add`);
  return resp.data;
};

const deleteFavoriteTicker = async (id, user_id) => {
  console.log(id, user_id);
  const resp = await api.delete(`/tickers/${id}/user/${user_id}/delete`);
  return resp.data;
};

const getUserFavorites = async id => {
  const resp = await api.get(`/users/${id}/favorites`);
  return resp.data;
};

export {
  editUser,
  fetchUserBank,
  fetchTickerData,
  createNewUser,
  loginUser,
  createFavoriteTicker,
  deleteFavoriteTicker,
  getUserFavorites
};
