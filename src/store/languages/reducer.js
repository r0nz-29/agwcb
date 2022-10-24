import {
  GET_IMAGES, GET_IMAGES_FAIL, GET_IMAGES_SUCCESS,
  GET_LANGS,
  GET_LANGS_FAIL,
  GET_LANGS_SUCCESS,
  GET_RANDOM,
  GET_RANDOM_FAIL,
  GET_RANDOM_SUCCESS, GET_SEARCH_RESULTS, GET_SEARCH_RESULTS_FAIL, GET_SEARCH_RESULTS_SUCCESS,
} from "./actionTypes";

const INIT_STATE = {
  languages: [],
  images: [],
  results: [],
  searching: false,
  fetchingRandom: false,
  fetchingImages: false,
  processing: false,
  randomImage: {},
  err: {},
};

export default function langsReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_LANGS:
      return {
        ...state,
        processing: true,
      };

    case GET_RANDOM:
      return {
        ...state,
        fetchingRandom: true,
      };

    case GET_IMAGES:
      return {
        ...state,
        images: [],
        fetchingImages: true,
      };

    case GET_SEARCH_RESULTS:
      return {
        ...state,
        results: [],
        searching: true,
      };

    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
        fetchingImages: false,
      };

    case GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        results: action.payload,
        searching: false,
      };

    case GET_LANGS_SUCCESS:
      return {
        ...state,
        languages: action.payload,
        processing: false,
      };

    case GET_RANDOM_SUCCESS:
      return {
        ...state,
        randomImage: action.payload,
        fetchingRandom: false,
      };

    case GET_LANGS_FAIL:
    case GET_IMAGES_FAIL:
      return {
        ...state,
        err: action.payload,
        processing: false,
      };

    case GET_RANDOM_FAIL:
      return {
        ...state,
        err: action.payload,
        fetchingRandom: false,
      }

    case GET_SEARCH_RESULTS_FAIL:
      return {
        ...state,
        err: action.payload,
        searching: false,
      }

    default:
      return {...state};
  }
}