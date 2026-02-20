import { FETCH_NEW_RELEASES_FAILURE, FETCH_NEW_RELEASES_REQUEST, FETCH_NEW_RELEASES_SUCCESS } from "../actions";

const initialState = {
  newReleases: [],
  loading: false,
  error: null,
};

const dinamicCards = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEW_RELEASES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        loading: false,
        newReleases: action.payload,
      };

    case FETCH_NEW_RELEASES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        newReleases: [],
      };

    default:
      return state;
  }
};

export default dinamicCards;
