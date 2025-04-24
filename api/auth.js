import axios from "axios";
const api = axios.create({ baseURL: "https://dummyjson.com" });

export const registerUser = ({ name, email, password }) =>
  api.post("/users/add", { name, email, password });

export const loginUser = ({ username, password }) =>
  api.post("/auth/login", { username, password });
