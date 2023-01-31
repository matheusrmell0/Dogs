import createAsyncSlice from '../helper/createAsyncSlice';
import { TOKEN_POST } from '../../api';

const slice = createAsyncSlice({
  name: 'token',
  initialState: {
    data: {
      token: window.localStorage.getItem('token') || null,
    },
  },
  fetchConfig: (user) => TOKEN_POST(user),
});

export const { resetStates: resetTokenState } = slice.actions;

export const fetchToken = slice.asyncAction;
export default slice.reducer;
