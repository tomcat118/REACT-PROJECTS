import { configureStore } from '@reduxjs/toolkit';
{/*redux toolkit used to set up store organization of the web app */}
import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/shazamCore';
export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
