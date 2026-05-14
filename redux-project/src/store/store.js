import { postReducer } from "./reducers/postReducer";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    posts: {
        posts: [],
        loading: false,
        error: null,
    }
}
export const store = configureStore({
    reducer: {
        posts: postReducer,
    },
    preloadedState: initialState,
});