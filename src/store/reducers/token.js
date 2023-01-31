import createAsyncSlice from '../helper/createAsyncSlice';
import { TOKEN_POST } from '../../api';

const slice = createAsyncSlice({
  name: 'token',
  fetchConfig: (user) => TOKEN_POST(user),
});

export const fetchToken = slice.asyncAction;
export default slice.reducer