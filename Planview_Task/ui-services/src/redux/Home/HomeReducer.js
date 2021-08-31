import {createReducer} from '@reduxjs/toolkit';
import * as actions from './HomeAction';

export const HomeReducer = createReducer({}, {
    [actions.fetchComments]: (state, action) =>{
        state.AllComments = action.payload.data;
        state.alldata = action.payload.alldata
    }
})