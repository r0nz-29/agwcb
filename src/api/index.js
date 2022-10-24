import axios from "axios";

export function _getLangs() {
  try {
    return axios.get(process.env.REACT_APP_BASE_URL + "/covers").then((response) => {
      return response.data;
    });
  } catch (e) {
    console.log("error: ");
    console.log(e);
  }
}

export  function _getRandom() {
  try {
    return axios.get(process.env.REACT_APP_BASE_URL + "/random").then((response) => {
      return response.data;
    });
  } catch (e) {
    console.log("error: ");
    console.log(e);
  }
}

export  function _getImages(language) {
  try {
    return axios.get(process.env.REACT_APP_BASE_URL + `/${language}`).then((response) => {
      return response.data;
    });
  } catch (e) {
    console.log("error: ");
    console.log(e);
  }
}

export  function _search(query) {
  try {
    return axios.get(process.env.REACT_APP_BASE_URL + `/search/${query}`).then((response) => {
      return response.data;
    });
  } catch (e) {
    console.log("error: ");
    console.log(e);
  }
}