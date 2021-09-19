import axios from "axios";

export default axios.create({
  baseURL: "https://receitas-example.herokuapp.com/api",
});