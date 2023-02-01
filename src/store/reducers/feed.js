import createAsyncSlice from '../helper/createAsyncSlice';
import { PHOTOS_GET } from '../../api';

const slice = createAsyncSlice({
  name: 'feed',
  initialState: {
    list: [],
    pages: 1,
    infinite: true,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload);
      if (action.payload.length === 0) state.infinite = false;
    },
    addPages(state) {
      state.pages++;
    },
    resetStates(state) {
      state.infinite = true;
      state.pages = 1;
      state.list = [];
      state.data = null;
      state.error = null;
      state.loading = false;
    },
  },
  fetchConfig: ({ page, total, user }) => PHOTOS_GET({ page, total, user }),
});

export const {
  addPhotos,
  addPages,
  resetStates: resetFeedStates,
} = slice.actions;
export const fetchFeed = slice.asyncAction;

// Ação de carregar novas fotos
export const loadNewPhotos = ({ total = 3, user }) => async (dispatch, getState) => {
    const { feed } = getState();
    dispatch(addPages());
    const { payload } = await dispatch(fetchFeed({ page: feed.pages, total, user }),);
    dispatch(addPhotos(payload));
  };

export default slice.reducer;
