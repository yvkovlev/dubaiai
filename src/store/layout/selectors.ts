import { AppState } from '../reducers';

export const selectLayout = (state: AppState) => state.layout;
export const selectActiveView = (state: AppState) => state.layout.activeView;
