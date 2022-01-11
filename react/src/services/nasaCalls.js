import axios from "axios";
import * as helpers from "./serviceHelpers";

const baseUrl = "https://localhost:5001/api/nasaimages";

// Get 10 Random images from APOD 1 for Hero Section 9 for info cards
const initialApodCall = () => {
  const config = {
    method: "GET",
    url: baseUrl,
    crossdomain: true,
    xhrFields: {
      withCredentials: true
  },
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

export { initialApodCall };
