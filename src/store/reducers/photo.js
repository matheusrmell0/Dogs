// Api
import { PHOTO_GET } from '../../api';

// Constantes
const FETCH_PHOTO_STARTED = 'photo/fetchStarted';
const FETCH_PHOTO_SUCCESS = 'photo/fetchSuccess';
const FETCH_PHOTO_ERROR = 'photo/fetchError';

// Action creators
const fetchStarted = () => ({ type: FETCH_PHOTO_STARTED });
const fetchSuccess = (data) => ({ type: FETCH_PHOTO_SUCCESS, payload: data });
const fetchError = (error) => ({ type: FETCH_PHOTO_ERROR, payload: error });

// Initial state
const initialState = {
  loading: false,
  data: null,
  error: null,
};

// Reducer
export default function photo(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHOTO_STARTED:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case FETCH_PHOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_PHOTO_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
}

// Async function
export const fetchPhoto = (id) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const { url, options } = PHOTO_GET(id);
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === false) throw new Error(data.message);
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};
