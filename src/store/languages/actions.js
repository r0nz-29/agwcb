import {
  GET_IMAGES, GET_IMAGES_FAIL, GET_IMAGES_SUCCESS,
  GET_LANGS,
  GET_LANGS_FAIL,
  GET_LANGS_SUCCESS,
  GET_RANDOM,
  GET_RANDOM_FAIL,
  GET_RANDOM_SUCCESS, GET_SEARCH_RESULTS, GET_SEARCH_RESULTS_FAIL, GET_SEARCH_RESULTS_SUCCESS,
} from "./actionTypes";

export const getLangs = () => ({
  type: GET_LANGS,
});

export const getLangsSuccess = langs => ({
  type: GET_LANGS_SUCCESS,
  payload: langs,
});

export const getLangsFail = err => ({
  type: GET_LANGS_FAIL,
  payload: err,
});

export const getRandom = () => ({
  type: GET_RANDOM,
});

export const getRandomSuccess = lang => ({
  type: GET_RANDOM_SUCCESS,
  payload: lang,
});

export const getRandomFail = err => ({
  type: GET_RANDOM_FAIL,
  payload: err,
});

export const getImages = language => ({
  type: GET_IMAGES,
  payload: language
});

export const getImagesSuccess = images => ({
  type: GET_IMAGES_SUCCESS,
  payload: images,
});

export const getImagesFail = err => ({
  type: GET_IMAGES_FAIL,
  payload: err,
});

export const getSearchResults = query => ({
  type: GET_SEARCH_RESULTS,
  payload: query
});

export const getSearchResultsSuccess = images => ({
  type: GET_SEARCH_RESULTS_SUCCESS,
  payload: images,
});

export const getSearchResultsFail = err => ({
  type: GET_SEARCH_RESULTS_FAIL,
  payload: err,
});