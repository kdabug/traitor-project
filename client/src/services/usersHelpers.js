import axios from "axios";
// const BASE_URL = "https://tranquil-ravine-67605.herokuapp.com";

// const api = axios.create({
//   baseURL: "https://tranquil-ravine-67605.herokuapp.com",
//   headers: {
//     authorization: `Bearer ${localStorage.getItem("jwt")}`
//   }
// });

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
  const respData = await api.get(`/stations`);
  return respData;
};

const fetchTickerData = async station => {
  console.log("this is fetchStationData station", station);
  const respData = await api.get(`/stations/${station}`);
  return respData.data;
};

const createFavoriteTicker = async (id, user_id) => {
  console.log(id, user_id);
  const resp = await api.post(`/stations/${id}/user/${user_id}/add`);
  return resp.data;
};

const deleteFavoriteTicker = async (id, user_id) => {
  console.log(id, user_id);
  const resp = await api.delete(`/stations/${id}/user/${user_id}/delete`);
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
  createNewComment,
  createFavoriteTicker,
  deleteFavoriteTicker,
  getUserFavorites
};
