import axios from "axios";

let API_URL = "https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6";
export default function callApi(endpoint, method = "GET", body) {
  return axios({
    method,
    url: `${API_URL}/${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}
