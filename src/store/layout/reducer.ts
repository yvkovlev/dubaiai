import { handleActions } from 'redux-actions';

import { LayoutState } from './types';
import {
  Views,
} from '../../constants';
import { SET_ACTIVE_LAYOUT } from './actions';

const initialState: LayoutState = {
  activeView: Views.LANDING,
};

export const reducer = handleActions(
  {
    [SET_ACTIVE_LAYOUT]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState,
);
