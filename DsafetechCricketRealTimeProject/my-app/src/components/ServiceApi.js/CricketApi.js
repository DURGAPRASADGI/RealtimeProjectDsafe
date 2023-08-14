import axios from "axios";
const BASE_API_URL = "http://localhost:8082/dsafetech";
class CricketApi {
  saveUser(userRegistration) {
    return axios.post(BASE_API_URL + "/reg/user" + userRegistration);
  }
}
export default new CricketApi();
