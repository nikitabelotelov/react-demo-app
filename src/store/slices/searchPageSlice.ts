import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Person, SearchQuery } from '../types';

export const PAGE_SIZE = 12;

type SearchPageState = {
  query: SearchQuery;
  showEmptyResults: boolean;
  results: Person[];
  total: number;
}

const initialState: SearchPageState = {
  query: {
    limit: PAGE_SIZE,
    offset: 0,
  },
  showEmptyResults: false,
  results: [],
  total: 0,
};

const searchPageSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<SearchQuery>) {
      state.query = action.payload;
    },
    setSearchResults(state, action: PayloadAction<{ persons: Person[], total: number }>) {
      state.results = action.payload.persons;
      state.total = action.payload.total;
      state.showEmptyResults = state.total === 0;
    },
    appendSearchResults(state, action: PayloadAction<{ persons: Person[], total: number }>) {
      state.results = [...state.results, ...action.payload.persons];
      state.total = action.payload.total;
    },
  },
});

export const {
  setSearchQuery,
  setSearchResults,
  appendSearchResults,
} = searchPageSlice.actions;

export default searchPageSlice.reducer;
