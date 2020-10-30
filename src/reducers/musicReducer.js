import {
  RECEIVE_MUSIC,
  REQUEST_MUSIC,
  ERROR_MUSIC,
  ADD_MUSIC,
  DELETE_MUSIC
} from "../actions/requestMusicAction";

const initialState = {
  isLoading: false,
  entries: {},
  error: false,
};

export const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MUSIC:
      return {
        ...state,
        isLoading: false,
      };
    case DELETE_MUSIC:
      return{
        ...state,
        isLoading:false,
      };
    case REQUEST_MUSIC:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_MUSIC:
      return {
        isLoading: false,
        entries: action.payload,
        error: false,
      };
    case ERROR_MUSIC:
      return {
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
