import reduceReducer from 'reduce-reducers';
import { configureStore } from '@reduxjs/toolkit';
import { HomeReducer } from './Home/HomeReducer';

const initalState = {
    chartList : []
}

const rootReducer = reduceReducer(
    initalState,
    HomeReducer
);

export const Store = configureStore({
    reducer: rootReducer
})