import axios from "axios";

export default axios.create({
    baseURL: "http://www.omdbapi.com", 
    headers: {
      "Content-type": "application/json",
    },
    params: {
      apikey: "51010232",
    },
  });