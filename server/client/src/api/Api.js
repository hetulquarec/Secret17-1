import axios from "axios";
import { URL } from "./url";

//eslint-disable-next-line
export default {
  get: (url) => {
    return axios.get(URL + url);
  },

  post: (url, data) => {
    return axios({
      method: "post",
      data: data,
      url: URL + url,
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  },
};
