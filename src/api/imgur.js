import qs from "qs";

const CLIENT_ID = "a342d03b94eda2d";
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const querystring = {
      client: CLIENT_ID,
      response_type: "token"
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  }
};
