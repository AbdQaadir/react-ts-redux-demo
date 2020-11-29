import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {todoReducer} from './reducers';

const rootReducer = combineReducers({
    todo: todoReducer
})
export const store = configureStore({
    reducer: rootReducer
});


export type RootState = ReturnType<typeof store.getState>


