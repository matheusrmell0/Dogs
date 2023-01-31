import createAsyncSlice from '../helper/createAsyncSlice';
import { GET_USER } from '../../api';
import { fetchToken } from './token';

const slice = createAsyncSlice({
  name: 'user',
  fetchConfig: (token) => GET_USER(token),
});
export const fetchUser = slice.asyncAction;

export const userLogin = (user) => async (dispatch) => {
  const { payload } = await dispatch(fetchToken(user));
  if (payload.token) await dispatch(fetchUser(payload.token));
};

export default slice.reducer;
