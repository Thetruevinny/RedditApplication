import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../Components/Topics/topicsSlice";

export default configureStore({
    reducer: {
        topics: topicsReducer
    },
});