import { createSlice } from "@reduxjs/toolkit";
import flame from '../../imgs/Flame.png';
import gaming from '../../imgs/Gaming.png';
import music from '../../imgs/Music.png';
import politics from '../../imgs/Politics.png';
import sport from '../../imgs/Sport.png';

const names = ['Popular', 'Music', 'Politics', 'Gaming', 'Sport'];

export const categories = {
    'Popular': flame,
    'Music': music,
    'Politics': politics,
    'Gaming': gaming,
    'Sport': sport
}

const initialState = {
    names: names,
    isSelected: 'Popular'
};

const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        // Changes the selected button when another is pressed.
        select: (state, action) => {
            const name = action.payload;
            state.isSelected = name;
        }
    }
});

export const selectTopics = (state) => state.topics.names;
export const selectTopic = (state) => state.topics.isSelected;

export default topicsSlice.reducer;

export const {select} = topicsSlice.actions;