import { carActionTypes } from "../../actionTypes";

const initialState = {
  loading: false,
  errorMessage: null,
  successMessage: null,
  data: [],
};

export const getCars = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case carActionTypes.GET_ALL_CARS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case carActionTypes.GET_ALL_CARS_SUCCESS:
      return {
        ...prevState,
        loading: false,
        data: payload,
      };
    case carActionTypes.GET_ALL_CARS_FAIL:
      return {
        ...prevState,
        loading: false,
        errorMessage: payload,
      };

    default:
      return prevState;
  }
};
