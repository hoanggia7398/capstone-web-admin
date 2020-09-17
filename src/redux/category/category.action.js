import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORY_SUCCESS
} from "./category.type";
import axios from "axios";
import {environment} from '../../environment'
export const fetchCategoriesRequest = () => {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  };
};

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  };
};

export const fetchCategorySuccess = (category) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload: category,
  };
};

export const fetchCategoriesFailure = (error) => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error,
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesRequest());
    axios
      .get(`${environment.endpoint}${environment.apiPath.category.main}`)
      .then((response) => {
        const categories = response.data;
        dispatch(fetchCategoriesSuccess(categories));
      })
      .catch((e) => {
        const message = e.message;
        dispatch(fetchCategoriesFailure(message));
      });
  };
};

export const fetchCategory = (id) => {
  return (dispatch) => {
    dispatch(fetchCategoriesRequest());
    axios
      .get(`${environment.endpoint}${environment.apiPath.category.main}/${id}`)
      .then((response) => {
        const category = response.data;
        dispatch(fetchCategorySuccess(category));
      })
      .catch((e) => {
        const message = e.message;
        dispatch(fetchCategoriesFailure(message));
      });
  };
};
