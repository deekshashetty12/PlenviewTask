import {createAction} from '@reduxjs/toolkit';
import axios from 'axios';
import configHandler from '../../config/configHandler';

export const fetchComments = createAction('fetchalldata/fetchComments');
export const fetchCommentsError = createAction('fetchalldata/fetchCommentsError');

export function fetchCommentsAll(nums){
       return dispatch => {
        return axios.request(configHandler.fetchDetailsAPI())
        .then(res => {
           if(res.data){
                dispatch(fetchComments({"data": res.data.data, "alldata": res.data.datavals}))
            } else {
                dispatch(fetchCommentsError({"data": 'No data'}))
            }
        })
        .catch(err => {
            handleError(dispatch, err, fetchCommentsError("Not able to fetch data"))
        })

    }
}

export function insertNewComment(query){
    return dispatch => {
        return axios.request(configHandler.insertCommentAPI(query))
        .then(res => {
           if(res.data){
                dispatch(fetchComments({"data": res.data.data, "alldata": res.data.datavals}))
            } else {
                dispatch(fetchCommentsError({"data": 'No data'}))
            }
        })
        .catch(err => {
            handleError(dispatch, err, fetchCommentsError("Not able to fetch data"))
        })

    }
}


export function deleteSelComment(query){
    return dispatch => {
        return axios.request(configHandler.deleteCommentAPI(query))
        .then(res => {
           if(res.data){
                dispatch(fetchComments({"data": res.data.data, "alldata": res.data.datavals}))
            } else {
                dispatch(fetchCommentsError({"data": 'No data'}))
            }
        })
        .catch(err => {
            handleError(dispatch, err, fetchCommentsError("Not able to fetch data"))
        })

    }
}


function handleError(dispatch, err, errTask) {
    if (err.response.status === 401) {dispatch()}
    else dispatch(errTask)
}