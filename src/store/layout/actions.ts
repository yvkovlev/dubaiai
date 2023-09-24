import { createAction } from 'redux-actions';

import { SetActiveLayoutPayload } from './types';

export const SET_ACTIVE_LAYOUT = 'LAYOUT/SET_ACTIVE_LAYOUT';

export const setActiveLayout = createAction<SetActiveLayoutPayload>(SET_ACTIVE_LAYOUT);
