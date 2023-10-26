import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Topic } from '../types';

type TopicState = {
  topics: Topic[];
}

const initialState: TopicState = {
  topics: [],
};

const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    setTopics(state, action: PayloadAction<Topic[]>) {
      state.topics = action.payload;
    },
  },
});

export const { setTopics } = topicSlice.actions;

export default topicSlice.reducer;
