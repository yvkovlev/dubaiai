import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from '.';
import { getPropertySearchResults } from '../api/predict';

export interface PropertySearchResponseItem {
  id: number,
  masterProject: string,
  projectName: string,
  buildingName: string,
}

export interface PropertySearchState {
  isRequesting: boolean;
  query: string;
  results: PropertySearchResponseItem[];
}

export const propertySearchInitialState: PropertySearchState = {
  isRequesting: false,
  query: '',
  results: [],
};

const propertySearchSlice = createSlice({
  name: 'propertySearch',
  initialState: propertySearchInitialState,
  reducers: {
    setIsPropertySearchRequesting(state, action: PayloadAction<boolean>) {
      state.isRequesting = action.payload;
    },
    setPropertySearchQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setPropertySearchResults(state, action: PayloadAction<PropertySearchResponseItem[]>) {
      state.results = action.payload;
    },
  },
  extraReducers: {},
});

const { reducer } = propertySearchSlice;
export { reducer as propertySearchReducer };

export const selectIsPropertySearchRequesting = (state: AppState) => state.propertySearch.isRequesting;
export const selectPropertySearchQuery = (state: AppState) => state.propertySearch.query;
export const selectPropertySearchResults = (state: AppState) => state.propertySearch.results;

export const {
  setIsPropertySearchRequesting,
  setPropertySearchQuery,
  setPropertySearchResults,
} = propertySearchSlice.actions;

export const getPropertySearchResultsThunk = createAsyncThunk(
  'propertySearch/getResults',
  async ({
    query,
    accessToken,
    onSuccess,
    onFailure,
  } : {
    query: string,
    accessToken: string,
    onSuccess: VoidFunction,
    onFailure: VoidFunction,
  }, { getState, dispatch }) => {
    dispatch(setIsPropertySearchRequesting(true));

    const propertySearchResponse = await getPropertySearchResults({ query }, accessToken);

    if (!propertySearchResponse) {
      onFailure();
      return;
    }

    dispatch(setIsPropertySearchRequesting(false));
    dispatch(setPropertySearchQuery(query));
    dispatch(setPropertySearchResults(propertySearchResponse.items));
    onSuccess();
  },
);
