import {
  Views,
} from '../../constants';

export interface LayoutState {
  activeView: Views;
}

export type SetActiveLayoutPayload = Partial<LayoutState>;
